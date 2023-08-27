import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WP, appIcons, colors, family, size} from '../../utilities';
import {DistanceModal} from '../AppModal/DistanceModal';
import {CityModal} from '../AppModal/CityModal';
import {AppDivider} from '../AppDivider/AppDivider';
import {CountriesModal} from '../AppModal/CountriesModal';

const RulesCard = ({...props}) => {
  const [isVisibleDis, setIsVisibleDis] = useState(false);
  const [isVisibleCity, setIsVisibleCity] = useState(false);
  const [isVisibleCon, setIsVisibleCon] = useState(false);
  const [distanceValues, setDistanceValues] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSaveDistance = values => {
    if (editIndex !== null) {
      const updatedValues = [...distanceValues];
      updatedValues[editIndex] = values;
      setDistanceValues(updatedValues);
    } else {
      setDistanceValues([...distanceValues, values]);
    }
    toggleModalDis();
  };

  const handleEditDistance = index => {
    setEditIndex(index);
    toggleModalDis();
  };

  const handleDeleteDistance = index => {
    const updatedDistanceValues = [...distanceValues];
    updatedDistanceValues.splice(index, 1);
    setDistanceValues(updatedDistanceValues);
  };

  const toggleModalDis = () => {
    setIsVisibleDis(!isVisibleDis);
    setEditIndex(null);
  };
  const toggleModalCity = () => {
    setIsVisibleCity(!isVisibleCity);
  };
  const toggleModalCon = () => {
    setIsVisibleCon(!isVisibleCon);
  };

  return (
    <View>
      <View style={styles.mainContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.titleStyle}>Add Rules by Distance</Text>
          <TouchableOpacity onPress={toggleModalDis}>
            <Image
              source={appIcons.plus}
              style={styles.iconContainer}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.noteText}>
          Note*:{' '}
          <Text style={{color: colors.r1}}>
            Cost Doubles based on the last rule added
          </Text>
        </Text>

        <Text style={styles.noteText}>
          -- Please Add Shipment Details by distance in (KM) from your origin
        </Text>
        <DistanceModal
          isModalVisible={isVisibleDis}
          onPress={toggleModalDis}
          onSave={handleSaveDistance}
          distanceValues={distanceValues}
          onDelete={handleDeleteDistance}
          editIndex={editIndex}
          handleEditDistance={handleEditDistance}
        />
        {distanceValues.length > 0 && (
          <View style={styles.distanceView}>
            <View style={styles.rowCon}>
              <Text style={[styles.titleStyle, {fontSize: size.xsmall}]}>
                Distance
              </Text>
              <Text
                style={[
                  styles.titleStyle,
                  {fontSize: size.xsmall, marginLeft: -WP('15')},
                ]}>
                Cost
              </Text>
              <Text />
            </View>
            <AppDivider />
            {distanceValues.map((item, index) => (
              <View style={[styles.rowCon, {marginVertical: WP('2')}]}>
                <Text style={styles.noteText}>{item.distance}</Text>
                <Text style={styles.noteText}>{item.cost}</Text>

                <View style={styles.rowStyle}>
                  <TouchableOpacity
                    style={styles.deleteCon}
                    onPress={() => handleDeleteDistance(index)}>
                    <Image
                      source={appIcons.delete}
                      style={styles.iconStyle}
                      resizeMode="center"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.editCon}
                    onPress={() => handleEditDistance(index)}>
                    <Image
                      source={appIcons.edit}
                      style={styles.iconStyle}
                      resizeMode="center"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        )}
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.titleStyle}>
            Set Flat or Free Shipping Rates for Specific Cities
          </Text>
          <TouchableOpacity onPress={toggleModalCity}>
            <Image
              source={appIcons.plus}
              style={styles.iconContainer}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.noteText}>
          -- Please Add Shipment Details in (Countries, Cities , All over world
          , All over Pakistan) different areas for shipping your orders
        </Text>

        <CityModal isModalVisible={isVisibleCity} onPress={toggleModalCity} />
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.titleStyle}>
            Set Flat or Free Shipping Rates for Specific Countries
          </Text>
          <TouchableOpacity onPress={toggleModalCon}>
            <Image
              source={appIcons.plus}
              style={styles.iconContainer}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.noteText}>
          -- Please Add Shipment Details in (Countries, Cities , All over world
          , All over Pakistan) different areas for shipping your orders
        </Text>
        <CountriesModal
          isModalVisible={isVisibleCon}
          onPress={toggleModalCon}
        />
        <View style={styles.cityView}>
          <View style={styles.rowCon}>
            <Text style={[styles.titleStyle, {fontSize: size.xsmall}]}>
              Name
            </Text>
            <Text style={[styles.titleStyle, {fontSize: size.xsmall}]}>
              Countries
            </Text>
            <Text
              style={[
                styles.titleStyle,
                {fontSize: size.xsmall, marginRight: WP('24')},
              ]}>
              Cost
            </Text>
            <View />
          </View>
          <AppDivider />
          <View style={[styles.rowCon, {marginVertical: WP('2')}]}>
            <Text style={styles.noteText}>adilpur</Text>
            <Text style={styles.noteText}>adilpur</Text>
            <Text style={styles.noteText}>Rs. 100</Text>
            <View style={styles.rowStyle}>
              <TouchableOpacity style={styles.deleteCon}>
                <Image
                  source={appIcons.delete}
                  style={styles.iconStyle}
                  resizeMode="center"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.editCon}>
                <Image
                  source={appIcons.edit}
                  style={styles.iconStyle}
                  resizeMode="center"
                />
              </TouchableOpacity>
            </View>
          </View>
          <AppDivider />
          <View style={[styles.rowCon, {marginVertical: WP('2')}]}>
            <Text style={styles.noteText}>adilpur</Text>
            <Text style={styles.noteText}>adilpur</Text>
            <Text style={styles.noteText}>Rs. 100</Text>
            <View style={styles.rowStyle}>
              <TouchableOpacity style={styles.deleteCon}>
                <Image
                  source={appIcons.delete}
                  style={styles.iconStyle}
                  resizeMode="center"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.editCon}>
                <Image
                  source={appIcons.edit}
                  style={styles.iconStyle}
                  resizeMode="center"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export {RulesCard};

const styles = StyleSheet.create({
  mainContainer: {
    shadowColor: '#ffffff60',
    shadowOffset: {width: 0, height: 0.2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
    backgroundColor: colors.w1,
    borderRadius: 8,
    paddingHorizontal: WP('4'),
    paddingVertical: WP('4'),
    marginVertical: WP('4'),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: WP('2'),
  },
  iconContainer: {
    backgroundColor: colors.gr,
    width: WP('8'),
    height: WP('8'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  iconStyle: {
    width: WP('4'),
    height: WP('4'),
  },
  noteText: {
    color: colors.p2,
    fontFamily: family.morkSans_regular,
    fontSize: size.small,
  },
  titleStyle: {
    color: colors.p1,
    fontFamily: family.workSans_semiBold,
    fontSize: size.normal,
    // flex: 1,
    // flexWrap: 'wrap',
  },
  distanceView: {
    borderWidth: 0.5,
    color: colors.p5,
    marginVertical: WP('3'),
  },
  rowCon: {
    flexDirection: 'row',
    paddingHorizontal: WP('2'),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: WP('2.5'),
  },
  deleteCon: {
    backgroundColor: colors.r1,
    width: WP('8'),
    height: WP('8'),
    borderRadius: WP('4'),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: WP('1'),
  },
  editCon: {
    backgroundColor: colors.p4,
    width: WP('8'),
    height: WP('8'),
    borderRadius: WP('4'),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: WP('1'),
  },
  rowStyle: {
    flexDirection: 'row',
  },
  cityView: {
    borderWidth: 0.5,
    color: colors.p5,
    marginVertical: WP('3'),
  },
  addCon: {
    backgroundColor: colors.gr,
    width: WP('6'),
    height: WP('6'),
    borderRadius: WP('4'),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: WP('1'),
  },
});

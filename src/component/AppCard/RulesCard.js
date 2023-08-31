import React, {useEffect, useState, Fragment} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WP, appIcons, colors, family, size} from '../../utilities';
import {DistanceModal} from '../AppModal/DistanceModal';
import {CityModal} from '../AppModal/CityModal';
import {AppDivider} from '../AppDivider/AppDivider';
import {CountriesModal} from '../AppModal/CountriesModal';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCitiesFromCountriesAsync} from '../../redux/Slices/SellerSlices/citiesfromCountries';
import {fetchCountriesAsync} from '../../redux/Slices/SellerSlices/countriesSlice';
import {ListItem} from '@rneui/themed';

const RulesCard = () => {
  const [isVisibleDis, setIsVisibleDis] = useState(false);
  const [isVisibleCity, setIsVisibleCity] = useState(false);
  const [isVisibleCon, setIsVisibleCon] = useState(false);
  const [distanceValues, setDistanceValues] = useState([]);
  const [countryVal, setCountryVal] = useState([]);
  const [cityVal, setCityVal] = useState([]);
  const [editDis, setEditDis] = useState(null);
  const [editCon, setEditCon] = useState(null);
  const [editCity, setEditCity] = useState(null);
  const dispatch = useDispatch();
  const countryId = 'Pakistan';
  const cities = useSelector(state => state?.cities);
  const countries = useSelector(state => state?.countries?.countries);

  const [cityData, setCityData] = useState([]);
  console.log('CityData', cityData[0]?.otherInfo?.data);

  const handleToggle = id => {
    const updatedCityData = cityData.map(city => {
      if (city.id === id) {
        return {
          ...city,
          expanded: !city.expanded,
        };
      } else {
        return {
          ...city,
          expanded: false,
        };
      }
    });

    setCityData(updatedCityData);
  };

  useEffect(() => {
    dispatch(fetchCitiesFromCountriesAsync(countryId));
    dispatch(fetchCountriesAsync());
  }, [countryId, dispatch]);

  ///Country Functions
  const handleSaveCountryZone = (values, selectedItem) => {
    if (editCon !== null) {
      const updatedValues = [...countryVal];
      updatedValues[editCon] = {...values, countries: selectedItem.label};
      setCountryVal(updatedValues);
    } else {
      setCountryVal([
        ...countryVal,
        {...values, countries: selectedItem.label},
      ]);
    }
    toggleModalCon();
  };
  const handleDeleteCountry = index => {
    const updatedDistanceValues = [...countryVal];
    updatedDistanceValues.splice(index, 1);
    setCountryVal(updatedDistanceValues);
  };
  const toggleModalCon = () => {
    setIsVisibleCon(!isVisibleCon);
  };
  const handleEditCountry = index => {
    setEditCon(index);
    toggleModalCon();
  };
  ///Distance Functions
  const handleSaveDistance = values => {
    if (editDis !== null) {
      const updatedValues = [...distanceValues];
      updatedValues[editDis] = values;
      setDistanceValues(updatedValues);
      setEditDis(null);
    } else {
      setDistanceValues([...distanceValues, values]);
    }
    toggleModalDis();
  };

  const handleEditDistance = index => {
    setEditDis(index); // Set the index of the item being edited
    const editedDistance = distanceValues[index]; // Get the existing value being edited
    toggleModalDis(); // Open the modal
    // Edited values will be passed to the DistanceModal via editedValues prop
  };

  const handleDeleteDistance = index => {
    const updatedDistanceValues = [...distanceValues];
    updatedDistanceValues.splice(index, 1);
    setDistanceValues(updatedDistanceValues);
  };

  const toggleModalDis = () => {
    setIsVisibleDis(!isVisibleDis);
    setEditDis(null);
  };
  ///City Funtions

  // Define a function to add or update city data
  const handleSaveCityZone = (values, selectedItem) => {
    if (editCity !== null) {
      const updatedCityData = [...cityData];
      updatedCityData[editCity] = {
        ...cityData[editCity],
        otherInfo: {
          data: [
            {
              ZoneName: values.zoneName,
              Region: 'Pakistan',
              City: selectedItem.label, // Make sure 'values' contains city information
              Cost: values.cost,
            },
          ],
        },
      };
      setCityData(updatedCityData);
    } else {
      setCityData([
        ...cityData,
        {
          id: cityData.length, // Adjust the way you generate IDs
          region: selectedItem.label,
          expanded: false,
          otherInfo: {
            data: [
              {
                ZoneName: values.zoneName,
                Region: 'Pakistan',
                City: selectedItem.label, // Make sure 'values' contains city information
                Cost: values.cost,
              },
            ],
          },
        },
      ]);
    }
    toggleModalCity();
  };

  const handleDeleteCity = index => {
    const updatedDistanceValues = [...cityData];
    updatedDistanceValues.splice(index, 1);
    setCityData(updatedDistanceValues);
  };
  const toggleModalCity = () => {
    setIsVisibleCity(!isVisibleCity);
  };
  const handleEditCity = index => {
    setEditCity(index);
    toggleModalCity();
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
          editIndex={editDis}
          editedValues={editDis !== null ? distanceValues[editDis] : null}
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

        {/* city details  */}
        {cityData && cityData.length > 0 && (
          <View style={styles.cityDataContainer}>
            {cityData.map((item, index) => (
              <Fragment key={index}>
                <TouchableOpacity
                  onPress={() => handleToggle(item.id)}
                  style={styles.innerContainer}>
                  <View style={[styles.rowContainer]}>
                    <Text style={styles.textStyle}>Zone Name:</Text>
                    <Text style={[styles.rightText, {marginLeft: WP('3')}]}>
                      {item.region}
                    </Text>
                  </View>
                  <Image
                    style={[
                      styles.iconStyle,
                      {
                        transform: item.expanded
                          ? [{rotate: '180deg'}]
                          : [{rotate: '0deg'}],
                      },
                    ]}
                    source={appIcons.downArrow}
                  />
                </TouchableOpacity>

                {item.expanded && (
                  <View style={styles.infoCon}>
                    {item.otherInfo.data.map((info, subIndex) => (
                      <View key={subIndex}>
                        <View style={styles.rowCon2}>
                          <View style={styles.column}>
                            <Text style={styles.textStyle}>Zone Name:</Text>
                          </View>
                          <View style={styles.column}>
                            <Text style={styles.rightText}>
                              {info?.ZoneName}
                            </Text>
                          </View>
                        </View>
                        <View style={styles.rowCon2}>
                          <View style={styles.column}>
                            <Text style={styles.textStyle}>Region:</Text>
                          </View>
                          <View style={styles.column}>
                            <Text style={styles.rightText}>{info?.Region}</Text>
                          </View>
                        </View>
                        <View style={styles.rowCon2}>
                          <View style={styles.column}>
                            <Text style={styles.textStyle}>City:</Text>
                          </View>
                          <View style={styles.column}>
                            <Text style={styles.rightText}>{info?.City}</Text>
                          </View>
                        </View>
                        <View style={styles.rowCon2}>
                          <View style={styles.column}>
                            <Text style={styles.textStyle}>Cost:</Text>
                          </View>
                          <View style={styles.column}>
                            <Text style={styles.rightText}>{info?.Cost}</Text>
                          </View>
                        </View>
                        <View style={styles.rowContainer}>
                          <TouchableOpacity
                            onPress={() => handleEditCity(index)}>
                            <Text style={styles.editText}>Edit</Text>
                          </TouchableOpacity>
                          <TouchableOpacity>
                            <Text
                              style={styles.deleteText}
                              onPress={() => handleDeleteCity(index)}>
                              Delete
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    ))}
                  </View>
                )}
              </Fragment>
            ))}
          </View>
        )}

        <CityModal
          isModalVisible={isVisibleCity}
          onPress={toggleModalCity}
          cities={cities}
          onSave={(values, selectedCity) =>
            handleSaveCityZone(values, selectedCity)
          }
          editedValues={editCity !== null ? cityVal[editCity] : null}
        />
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
          countires={countries?.countries}
          onSave={(values, selectedItem) =>
            handleSaveCountryZone(values, selectedItem)
          }
          countryVal={countryVal}
          editedValues={editCon !== null ? countryVal[editCon] : null}
        />
        {countryVal.length > 0 && (
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
            {countryVal?.map((item, index) => (
              <View style={[styles.rowCon, {marginVertical: WP('2')}]}>
                <Text style={styles.noteText}>{item?.zoneName}</Text>
                <Text style={styles.noteText}>{item?.countries}</Text>
                <Text style={styles.noteText}>{item?.cost}</Text>
                <View style={styles.rowStyle}>
                  <TouchableOpacity
                    style={styles.deleteCon}
                    onPress={() => handleDeleteCountry(index)}>
                    <Image
                      source={appIcons.delete}
                      style={styles.iconStyle}
                      resizeMode="center"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.editCon}
                    onPress={() => handleEditCountry(index)}>
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
  rowCon2: {
    flexDirection: 'row',
    alignItems: 'center',
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
  cityDataContainer: {
    borderColor: colors.g1,
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    padding: WP('1'),
    borderColor: colors.g1,
    borderWidth: 1,
    marginTop: WP('2'),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: WP('2'),
  },
  arrowContainer: {
    alignSelf: 'flex-end',
  },
  textStyle: {
    color: colors.p1,
    fontFamily: family.workSans_medium,
    fontSize: size.small,
  },
  rightText: {
    color: colors.b1,
    fontFamily: family.morkSans_regular,
    fontSize: size.normal,
    marginHorizontal: WP('2'),
    marginLeft: -WP('10'),
  },
  infoCon: {
    borderWidth: 1,
    borderColor: colors.g1,
    padding: WP('2'),
  },
  column: {
    flex: 0.5,
  },
  editText: {
    color: colors.p1,
    fontFamily: family.workSans_medium,
    fontSize: size.medium,
    textDecorationLine: 'underline',
  },
  deleteText: {
    color: colors.r1,
    fontFamily: family.workSans_medium,
    fontSize: size.medium,
    textDecorationLine: 'underline',
  },
});

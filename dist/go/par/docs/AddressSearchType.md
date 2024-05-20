# AddressSearchType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CityName** | Pointer to **string** | City (e.g., Dublin), town, or postal station (i.e., a postal service territory, often used in a military address). | [optional] 
**Country** | Pointer to [**CountryNameType**](CountryNameType.md) |  | [optional] 
**ExcludeNoCity** | Pointer to **bool** | When true indicates that only profiles with city will be fetched. | [optional] 
**PostalCode** | Pointer to **string** | Post Office Code number. | [optional] 
**State** | Pointer to **string** | State or Province name (e.g., Texas). | [optional] 
**StreetAddress** | Pointer to **string** | First Line of Street Address. For profile search it matches the first Address line. | [optional] 

## Methods

### NewAddressSearchType

`func NewAddressSearchType() *AddressSearchType`

NewAddressSearchType instantiates a new AddressSearchType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAddressSearchTypeWithDefaults

`func NewAddressSearchTypeWithDefaults() *AddressSearchType`

NewAddressSearchTypeWithDefaults instantiates a new AddressSearchType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCityName

`func (o *AddressSearchType) GetCityName() string`

GetCityName returns the CityName field if non-nil, zero value otherwise.

### GetCityNameOk

`func (o *AddressSearchType) GetCityNameOk() (*string, bool)`

GetCityNameOk returns a tuple with the CityName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCityName

`func (o *AddressSearchType) SetCityName(v string)`

SetCityName sets CityName field to given value.

### HasCityName

`func (o *AddressSearchType) HasCityName() bool`

HasCityName returns a boolean if a field has been set.

### GetCountry

`func (o *AddressSearchType) GetCountry() CountryNameType`

GetCountry returns the Country field if non-nil, zero value otherwise.

### GetCountryOk

`func (o *AddressSearchType) GetCountryOk() (*CountryNameType, bool)`

GetCountryOk returns a tuple with the Country field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountry

`func (o *AddressSearchType) SetCountry(v CountryNameType)`

SetCountry sets Country field to given value.

### HasCountry

`func (o *AddressSearchType) HasCountry() bool`

HasCountry returns a boolean if a field has been set.

### GetExcludeNoCity

`func (o *AddressSearchType) GetExcludeNoCity() bool`

GetExcludeNoCity returns the ExcludeNoCity field if non-nil, zero value otherwise.

### GetExcludeNoCityOk

`func (o *AddressSearchType) GetExcludeNoCityOk() (*bool, bool)`

GetExcludeNoCityOk returns a tuple with the ExcludeNoCity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeNoCity

`func (o *AddressSearchType) SetExcludeNoCity(v bool)`

SetExcludeNoCity sets ExcludeNoCity field to given value.

### HasExcludeNoCity

`func (o *AddressSearchType) HasExcludeNoCity() bool`

HasExcludeNoCity returns a boolean if a field has been set.

### GetPostalCode

`func (o *AddressSearchType) GetPostalCode() string`

GetPostalCode returns the PostalCode field if non-nil, zero value otherwise.

### GetPostalCodeOk

`func (o *AddressSearchType) GetPostalCodeOk() (*string, bool)`

GetPostalCodeOk returns a tuple with the PostalCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostalCode

`func (o *AddressSearchType) SetPostalCode(v string)`

SetPostalCode sets PostalCode field to given value.

### HasPostalCode

`func (o *AddressSearchType) HasPostalCode() bool`

HasPostalCode returns a boolean if a field has been set.

### GetState

`func (o *AddressSearchType) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *AddressSearchType) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *AddressSearchType) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *AddressSearchType) HasState() bool`

HasState returns a boolean if a field has been set.

### GetStreetAddress

`func (o *AddressSearchType) GetStreetAddress() string`

GetStreetAddress returns the StreetAddress field if non-nil, zero value otherwise.

### GetStreetAddressOk

`func (o *AddressSearchType) GetStreetAddressOk() (*string, bool)`

GetStreetAddressOk returns a tuple with the StreetAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStreetAddress

`func (o *AddressSearchType) SetStreetAddress(v string)`

SetStreetAddress sets StreetAddress field to given value.

### HasStreetAddress

`func (o *AddressSearchType) HasStreetAddress() bool`

HasStreetAddress returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# AddressType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsValidated** | Pointer to **bool** | Indicator to define if the Address is validated by the Address Validation System. | [optional] 
**AddressLine** | Pointer to **[]string** | When the address is unformatted (FormattedInd&#x3D;\&quot;false\&quot;) these lines will contain free form address details. When the address is formatted and street number and street name must be sent independently, the street number will be sent using StreetNmbr, and the street name will be sent in the first AddressLine occurrence. | [optional] 
**CityName** | Pointer to **string** | City (e.g., Dublin), town, or postal station (i.e., a postal service territory, often used in a military address). | [optional] 
**PostalCode** | Pointer to **string** | Post Office Code number. | [optional] 
**CityExtension** | Pointer to **string** | Post Office City Extension Code number. City Extension mainly used for UK addresses. | [optional] 
**County** | Pointer to **string** | County or District Name (e.g., Fairfax). This is read only. | [optional] 
**State** | Pointer to **string** | State or Province name (e.g., Texas). | [optional] 
**Country** | Pointer to [**CountryNameType**](CountryNameType.md) |  | [optional] 
**Type** | Pointer to **string** | Defines the type of address (e.g. home, business, other). | [optional] 
**TypeDescription** | Pointer to **string** | Describes the type code | [optional] 

## Methods

### NewAddressType

`func NewAddressType() *AddressType`

NewAddressType instantiates a new AddressType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAddressTypeWithDefaults

`func NewAddressTypeWithDefaults() *AddressType`

NewAddressTypeWithDefaults instantiates a new AddressType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIsValidated

`func (o *AddressType) GetIsValidated() bool`

GetIsValidated returns the IsValidated field if non-nil, zero value otherwise.

### GetIsValidatedOk

`func (o *AddressType) GetIsValidatedOk() (*bool, bool)`

GetIsValidatedOk returns a tuple with the IsValidated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsValidated

`func (o *AddressType) SetIsValidated(v bool)`

SetIsValidated sets IsValidated field to given value.

### HasIsValidated

`func (o *AddressType) HasIsValidated() bool`

HasIsValidated returns a boolean if a field has been set.

### GetAddressLine

`func (o *AddressType) GetAddressLine() []string`

GetAddressLine returns the AddressLine field if non-nil, zero value otherwise.

### GetAddressLineOk

`func (o *AddressType) GetAddressLineOk() (*[]string, bool)`

GetAddressLineOk returns a tuple with the AddressLine field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddressLine

`func (o *AddressType) SetAddressLine(v []string)`

SetAddressLine sets AddressLine field to given value.

### HasAddressLine

`func (o *AddressType) HasAddressLine() bool`

HasAddressLine returns a boolean if a field has been set.

### GetCityName

`func (o *AddressType) GetCityName() string`

GetCityName returns the CityName field if non-nil, zero value otherwise.

### GetCityNameOk

`func (o *AddressType) GetCityNameOk() (*string, bool)`

GetCityNameOk returns a tuple with the CityName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCityName

`func (o *AddressType) SetCityName(v string)`

SetCityName sets CityName field to given value.

### HasCityName

`func (o *AddressType) HasCityName() bool`

HasCityName returns a boolean if a field has been set.

### GetPostalCode

`func (o *AddressType) GetPostalCode() string`

GetPostalCode returns the PostalCode field if non-nil, zero value otherwise.

### GetPostalCodeOk

`func (o *AddressType) GetPostalCodeOk() (*string, bool)`

GetPostalCodeOk returns a tuple with the PostalCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostalCode

`func (o *AddressType) SetPostalCode(v string)`

SetPostalCode sets PostalCode field to given value.

### HasPostalCode

`func (o *AddressType) HasPostalCode() bool`

HasPostalCode returns a boolean if a field has been set.

### GetCityExtension

`func (o *AddressType) GetCityExtension() string`

GetCityExtension returns the CityExtension field if non-nil, zero value otherwise.

### GetCityExtensionOk

`func (o *AddressType) GetCityExtensionOk() (*string, bool)`

GetCityExtensionOk returns a tuple with the CityExtension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCityExtension

`func (o *AddressType) SetCityExtension(v string)`

SetCityExtension sets CityExtension field to given value.

### HasCityExtension

`func (o *AddressType) HasCityExtension() bool`

HasCityExtension returns a boolean if a field has been set.

### GetCounty

`func (o *AddressType) GetCounty() string`

GetCounty returns the County field if non-nil, zero value otherwise.

### GetCountyOk

`func (o *AddressType) GetCountyOk() (*string, bool)`

GetCountyOk returns a tuple with the County field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCounty

`func (o *AddressType) SetCounty(v string)`

SetCounty sets County field to given value.

### HasCounty

`func (o *AddressType) HasCounty() bool`

HasCounty returns a boolean if a field has been set.

### GetState

`func (o *AddressType) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *AddressType) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *AddressType) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *AddressType) HasState() bool`

HasState returns a boolean if a field has been set.

### GetCountry

`func (o *AddressType) GetCountry() CountryNameType`

GetCountry returns the Country field if non-nil, zero value otherwise.

### GetCountryOk

`func (o *AddressType) GetCountryOk() (*CountryNameType, bool)`

GetCountryOk returns a tuple with the Country field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountry

`func (o *AddressType) SetCountry(v CountryNameType)`

SetCountry sets Country field to given value.

### HasCountry

`func (o *AddressType) HasCountry() bool`

HasCountry returns a boolean if a field has been set.

### GetType

`func (o *AddressType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AddressType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AddressType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AddressType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetTypeDescription

`func (o *AddressType) GetTypeDescription() string`

GetTypeDescription returns the TypeDescription field if non-nil, zero value otherwise.

### GetTypeDescriptionOk

`func (o *AddressType) GetTypeDescriptionOk() (*string, bool)`

GetTypeDescriptionOk returns a tuple with the TypeDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTypeDescription

`func (o *AddressType) SetTypeDescription(v string)`

SetTypeDescription sets TypeDescription field to given value.

### HasTypeDescription

`func (o *AddressType) HasTypeDescription() bool`

HasTypeDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



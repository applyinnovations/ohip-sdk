# AddressType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AddressLine** | Pointer to **[]string** | When the address is unformatted (FormattedInd&#x3D;\&quot;false\&quot;) these lines will contain free form address details. When the address is formatted and street number and street name must be sent independently, the street number will be sent using StreetNmbr, and the street name will be sent in the first AddressLine occurrence. | [optional] 
**CityExtension** | Pointer to **string** | Post Office City Extension Code number. City Extension mainly used for UK addresses. | [optional] 
**CityName** | Pointer to **string** | City (e.g., Dublin), town, or postal station (i.e., a postal service territory, often used in a military address). | [optional] 
**Country** | Pointer to [**CountryNameType**](CountryNameType.md) |  | [optional] 
**County** | Pointer to **string** | County or District Name (e.g., Fairfax). This is read only. | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**IsValidated** | Pointer to **bool** | Indicator to define if the Address is validated by the Address Validation System. | [optional] 
**Language** | Pointer to **string** | Language identification. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**PostalCode** | Pointer to **string** | Post Office Code number. | [optional] 
**PrimaryInd** | Pointer to **bool** | When true, indicates a primary information. | [optional] 
**State** | Pointer to **string** | State or Province name (e.g., Texas). | [optional] 
**Type** | Pointer to **string** | Defines the type of address (e.g. home, business, other). | [optional] 
**TypeDescription** | Pointer to **string** | Describes the type code | [optional] 
**UpdateReservations** | Pointer to **bool** | Indicates whether to update the reservations or not. If true and the address is primary, then all associated active reservations will be updated with the new primary address. | [optional] 

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

### GetCreateDateTime

`func (o *AddressType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *AddressType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *AddressType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *AddressType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *AddressType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *AddressType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *AddressType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *AddressType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

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

### GetLanguage

`func (o *AddressType) GetLanguage() string`

GetLanguage returns the Language field if non-nil, zero value otherwise.

### GetLanguageOk

`func (o *AddressType) GetLanguageOk() (*string, bool)`

GetLanguageOk returns a tuple with the Language field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLanguage

`func (o *AddressType) SetLanguage(v string)`

SetLanguage sets Language field to given value.

### HasLanguage

`func (o *AddressType) HasLanguage() bool`

HasLanguage returns a boolean if a field has been set.

### GetLastModifierId

`func (o *AddressType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *AddressType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *AddressType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *AddressType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *AddressType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *AddressType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *AddressType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *AddressType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

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

### GetPrimaryInd

`func (o *AddressType) GetPrimaryInd() bool`

GetPrimaryInd returns the PrimaryInd field if non-nil, zero value otherwise.

### GetPrimaryIndOk

`func (o *AddressType) GetPrimaryIndOk() (*bool, bool)`

GetPrimaryIndOk returns a tuple with the PrimaryInd field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryInd

`func (o *AddressType) SetPrimaryInd(v bool)`

SetPrimaryInd sets PrimaryInd field to given value.

### HasPrimaryInd

`func (o *AddressType) HasPrimaryInd() bool`

HasPrimaryInd returns a boolean if a field has been set.

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

### GetUpdateReservations

`func (o *AddressType) GetUpdateReservations() bool`

GetUpdateReservations returns the UpdateReservations field if non-nil, zero value otherwise.

### GetUpdateReservationsOk

`func (o *AddressType) GetUpdateReservationsOk() (*bool, bool)`

GetUpdateReservationsOk returns a tuple with the UpdateReservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdateReservations

`func (o *AddressType) SetUpdateReservations(v bool)`

SetUpdateReservations sets UpdateReservations field to given value.

### HasUpdateReservations

`func (o *AddressType) HasUpdateReservations() bool`

HasUpdateReservations returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# HotelInfoTypeAddress

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
**Language** | Pointer to **string** | Language identification. | [optional] 
**Type** | Pointer to **string** | Defines the type of address (e.g. home, business, other). | [optional] 
**TypeDescription** | Pointer to **string** | Describes the type code | [optional] 
**PrimaryInd** | Pointer to **bool** | When true, indicates a primary information. | [optional] 
**UpdateReservations** | Pointer to **bool** | Indicates whether to update the reservations or not. If true and the address is primary, then all associated active reservations will be updated with the new primary address. | [optional] 
**BarCode** | Pointer to **string** | The postal barcode for the address. | [optional] 
**CreateDateTime** | Pointer to **time.Time** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**LastModifyDateTime** | Pointer to **time.Time** | Time stamp of last modification. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**PurgeDate** | Pointer to **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | [optional] 
**RegionCode** | Pointer to **string** | The region code of the hotel. | [optional] 

## Methods

### NewHotelInfoTypeAddress

`func NewHotelInfoTypeAddress() *HotelInfoTypeAddress`

NewHotelInfoTypeAddress instantiates a new HotelInfoTypeAddress object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelInfoTypeAddressWithDefaults

`func NewHotelInfoTypeAddressWithDefaults() *HotelInfoTypeAddress`

NewHotelInfoTypeAddressWithDefaults instantiates a new HotelInfoTypeAddress object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIsValidated

`func (o *HotelInfoTypeAddress) GetIsValidated() bool`

GetIsValidated returns the IsValidated field if non-nil, zero value otherwise.

### GetIsValidatedOk

`func (o *HotelInfoTypeAddress) GetIsValidatedOk() (*bool, bool)`

GetIsValidatedOk returns a tuple with the IsValidated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsValidated

`func (o *HotelInfoTypeAddress) SetIsValidated(v bool)`

SetIsValidated sets IsValidated field to given value.

### HasIsValidated

`func (o *HotelInfoTypeAddress) HasIsValidated() bool`

HasIsValidated returns a boolean if a field has been set.

### GetAddressLine

`func (o *HotelInfoTypeAddress) GetAddressLine() []string`

GetAddressLine returns the AddressLine field if non-nil, zero value otherwise.

### GetAddressLineOk

`func (o *HotelInfoTypeAddress) GetAddressLineOk() (*[]string, bool)`

GetAddressLineOk returns a tuple with the AddressLine field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddressLine

`func (o *HotelInfoTypeAddress) SetAddressLine(v []string)`

SetAddressLine sets AddressLine field to given value.

### HasAddressLine

`func (o *HotelInfoTypeAddress) HasAddressLine() bool`

HasAddressLine returns a boolean if a field has been set.

### GetCityName

`func (o *HotelInfoTypeAddress) GetCityName() string`

GetCityName returns the CityName field if non-nil, zero value otherwise.

### GetCityNameOk

`func (o *HotelInfoTypeAddress) GetCityNameOk() (*string, bool)`

GetCityNameOk returns a tuple with the CityName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCityName

`func (o *HotelInfoTypeAddress) SetCityName(v string)`

SetCityName sets CityName field to given value.

### HasCityName

`func (o *HotelInfoTypeAddress) HasCityName() bool`

HasCityName returns a boolean if a field has been set.

### GetPostalCode

`func (o *HotelInfoTypeAddress) GetPostalCode() string`

GetPostalCode returns the PostalCode field if non-nil, zero value otherwise.

### GetPostalCodeOk

`func (o *HotelInfoTypeAddress) GetPostalCodeOk() (*string, bool)`

GetPostalCodeOk returns a tuple with the PostalCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostalCode

`func (o *HotelInfoTypeAddress) SetPostalCode(v string)`

SetPostalCode sets PostalCode field to given value.

### HasPostalCode

`func (o *HotelInfoTypeAddress) HasPostalCode() bool`

HasPostalCode returns a boolean if a field has been set.

### GetCityExtension

`func (o *HotelInfoTypeAddress) GetCityExtension() string`

GetCityExtension returns the CityExtension field if non-nil, zero value otherwise.

### GetCityExtensionOk

`func (o *HotelInfoTypeAddress) GetCityExtensionOk() (*string, bool)`

GetCityExtensionOk returns a tuple with the CityExtension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCityExtension

`func (o *HotelInfoTypeAddress) SetCityExtension(v string)`

SetCityExtension sets CityExtension field to given value.

### HasCityExtension

`func (o *HotelInfoTypeAddress) HasCityExtension() bool`

HasCityExtension returns a boolean if a field has been set.

### GetCounty

`func (o *HotelInfoTypeAddress) GetCounty() string`

GetCounty returns the County field if non-nil, zero value otherwise.

### GetCountyOk

`func (o *HotelInfoTypeAddress) GetCountyOk() (*string, bool)`

GetCountyOk returns a tuple with the County field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCounty

`func (o *HotelInfoTypeAddress) SetCounty(v string)`

SetCounty sets County field to given value.

### HasCounty

`func (o *HotelInfoTypeAddress) HasCounty() bool`

HasCounty returns a boolean if a field has been set.

### GetState

`func (o *HotelInfoTypeAddress) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *HotelInfoTypeAddress) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *HotelInfoTypeAddress) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *HotelInfoTypeAddress) HasState() bool`

HasState returns a boolean if a field has been set.

### GetCountry

`func (o *HotelInfoTypeAddress) GetCountry() CountryNameType`

GetCountry returns the Country field if non-nil, zero value otherwise.

### GetCountryOk

`func (o *HotelInfoTypeAddress) GetCountryOk() (*CountryNameType, bool)`

GetCountryOk returns a tuple with the Country field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountry

`func (o *HotelInfoTypeAddress) SetCountry(v CountryNameType)`

SetCountry sets Country field to given value.

### HasCountry

`func (o *HotelInfoTypeAddress) HasCountry() bool`

HasCountry returns a boolean if a field has been set.

### GetLanguage

`func (o *HotelInfoTypeAddress) GetLanguage() string`

GetLanguage returns the Language field if non-nil, zero value otherwise.

### GetLanguageOk

`func (o *HotelInfoTypeAddress) GetLanguageOk() (*string, bool)`

GetLanguageOk returns a tuple with the Language field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLanguage

`func (o *HotelInfoTypeAddress) SetLanguage(v string)`

SetLanguage sets Language field to given value.

### HasLanguage

`func (o *HotelInfoTypeAddress) HasLanguage() bool`

HasLanguage returns a boolean if a field has been set.

### GetType

`func (o *HotelInfoTypeAddress) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *HotelInfoTypeAddress) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *HotelInfoTypeAddress) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *HotelInfoTypeAddress) HasType() bool`

HasType returns a boolean if a field has been set.

### GetTypeDescription

`func (o *HotelInfoTypeAddress) GetTypeDescription() string`

GetTypeDescription returns the TypeDescription field if non-nil, zero value otherwise.

### GetTypeDescriptionOk

`func (o *HotelInfoTypeAddress) GetTypeDescriptionOk() (*string, bool)`

GetTypeDescriptionOk returns a tuple with the TypeDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTypeDescription

`func (o *HotelInfoTypeAddress) SetTypeDescription(v string)`

SetTypeDescription sets TypeDescription field to given value.

### HasTypeDescription

`func (o *HotelInfoTypeAddress) HasTypeDescription() bool`

HasTypeDescription returns a boolean if a field has been set.

### GetPrimaryInd

`func (o *HotelInfoTypeAddress) GetPrimaryInd() bool`

GetPrimaryInd returns the PrimaryInd field if non-nil, zero value otherwise.

### GetPrimaryIndOk

`func (o *HotelInfoTypeAddress) GetPrimaryIndOk() (*bool, bool)`

GetPrimaryIndOk returns a tuple with the PrimaryInd field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryInd

`func (o *HotelInfoTypeAddress) SetPrimaryInd(v bool)`

SetPrimaryInd sets PrimaryInd field to given value.

### HasPrimaryInd

`func (o *HotelInfoTypeAddress) HasPrimaryInd() bool`

HasPrimaryInd returns a boolean if a field has been set.

### GetUpdateReservations

`func (o *HotelInfoTypeAddress) GetUpdateReservations() bool`

GetUpdateReservations returns the UpdateReservations field if non-nil, zero value otherwise.

### GetUpdateReservationsOk

`func (o *HotelInfoTypeAddress) GetUpdateReservationsOk() (*bool, bool)`

GetUpdateReservationsOk returns a tuple with the UpdateReservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdateReservations

`func (o *HotelInfoTypeAddress) SetUpdateReservations(v bool)`

SetUpdateReservations sets UpdateReservations field to given value.

### HasUpdateReservations

`func (o *HotelInfoTypeAddress) HasUpdateReservations() bool`

HasUpdateReservations returns a boolean if a field has been set.

### GetBarCode

`func (o *HotelInfoTypeAddress) GetBarCode() string`

GetBarCode returns the BarCode field if non-nil, zero value otherwise.

### GetBarCodeOk

`func (o *HotelInfoTypeAddress) GetBarCodeOk() (*string, bool)`

GetBarCodeOk returns a tuple with the BarCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBarCode

`func (o *HotelInfoTypeAddress) SetBarCode(v string)`

SetBarCode sets BarCode field to given value.

### HasBarCode

`func (o *HotelInfoTypeAddress) HasBarCode() bool`

HasBarCode returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *HotelInfoTypeAddress) GetCreateDateTime() time.Time`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *HotelInfoTypeAddress) GetCreateDateTimeOk() (*time.Time, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *HotelInfoTypeAddress) SetCreateDateTime(v time.Time)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *HotelInfoTypeAddress) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *HotelInfoTypeAddress) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *HotelInfoTypeAddress) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *HotelInfoTypeAddress) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *HotelInfoTypeAddress) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *HotelInfoTypeAddress) GetLastModifyDateTime() time.Time`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *HotelInfoTypeAddress) GetLastModifyDateTimeOk() (*time.Time, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *HotelInfoTypeAddress) SetLastModifyDateTime(v time.Time)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *HotelInfoTypeAddress) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLastModifierId

`func (o *HotelInfoTypeAddress) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *HotelInfoTypeAddress) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *HotelInfoTypeAddress) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *HotelInfoTypeAddress) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetPurgeDate

`func (o *HotelInfoTypeAddress) GetPurgeDate() string`

GetPurgeDate returns the PurgeDate field if non-nil, zero value otherwise.

### GetPurgeDateOk

`func (o *HotelInfoTypeAddress) GetPurgeDateOk() (*string, bool)`

GetPurgeDateOk returns a tuple with the PurgeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurgeDate

`func (o *HotelInfoTypeAddress) SetPurgeDate(v string)`

SetPurgeDate sets PurgeDate field to given value.

### HasPurgeDate

`func (o *HotelInfoTypeAddress) HasPurgeDate() bool`

HasPurgeDate returns a boolean if a field has been set.

### GetRegionCode

`func (o *HotelInfoTypeAddress) GetRegionCode() string`

GetRegionCode returns the RegionCode field if non-nil, zero value otherwise.

### GetRegionCodeOk

`func (o *HotelInfoTypeAddress) GetRegionCodeOk() (*string, bool)`

GetRegionCodeOk returns a tuple with the RegionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegionCode

`func (o *HotelInfoTypeAddress) SetRegionCode(v string)`

SetRegionCode sets RegionCode field to given value.

### HasRegionCode

`func (o *HotelInfoTypeAddress) HasRegionCode() bool`

HasRegionCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



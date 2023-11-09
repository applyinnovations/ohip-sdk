# CountryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AddressDoctorMode** | Pointer to **string** | Defines the mode used to invoke address doctor service. | [optional] 
**CountryCode** | Pointer to **string** | Country code identifying the country. | [optional] 
**DisplayFlag** | Pointer to **bool** | Indicates if the country flag should be displayed. | [optional] 
**DisplaySequence** | Pointer to **float32** | Sequence number for displaying the countries. | [optional] 
**GuestAddressFormat** | Pointer to **string** | Guest Address format Codes for confirmation letter. | [optional] 
**HotelId** | Pointer to **string** | Hotel code the country belongs to. | [optional] 
**IsoCode** | Pointer to **string** | ISO standard code for country. | [optional] 
**IsoName** | Pointer to **string** | ISO standard name for country. | [optional] 
**MainGroup** | Pointer to **string** | Main Group of Country. Used in statistic reports. | [optional] 
**Name** | Pointer to **string** | Name for the country. | [optional] 
**PrintSequence** | Pointer to **float32** | Print Sequence number for report. | [optional] 
**RegionCode** | Pointer to **string** | Regin to which the Country belongs. | [optional] 
**StatisticCode** | Pointer to **string** | Statistic code for the country. | [optional] 

## Methods

### NewCountryType

`func NewCountryType() *CountryType`

NewCountryType instantiates a new CountryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCountryTypeWithDefaults

`func NewCountryTypeWithDefaults() *CountryType`

NewCountryTypeWithDefaults instantiates a new CountryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddressDoctorMode

`func (o *CountryType) GetAddressDoctorMode() string`

GetAddressDoctorMode returns the AddressDoctorMode field if non-nil, zero value otherwise.

### GetAddressDoctorModeOk

`func (o *CountryType) GetAddressDoctorModeOk() (*string, bool)`

GetAddressDoctorModeOk returns a tuple with the AddressDoctorMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddressDoctorMode

`func (o *CountryType) SetAddressDoctorMode(v string)`

SetAddressDoctorMode sets AddressDoctorMode field to given value.

### HasAddressDoctorMode

`func (o *CountryType) HasAddressDoctorMode() bool`

HasAddressDoctorMode returns a boolean if a field has been set.

### GetCountryCode

`func (o *CountryType) GetCountryCode() string`

GetCountryCode returns the CountryCode field if non-nil, zero value otherwise.

### GetCountryCodeOk

`func (o *CountryType) GetCountryCodeOk() (*string, bool)`

GetCountryCodeOk returns a tuple with the CountryCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountryCode

`func (o *CountryType) SetCountryCode(v string)`

SetCountryCode sets CountryCode field to given value.

### HasCountryCode

`func (o *CountryType) HasCountryCode() bool`

HasCountryCode returns a boolean if a field has been set.

### GetDisplayFlag

`func (o *CountryType) GetDisplayFlag() bool`

GetDisplayFlag returns the DisplayFlag field if non-nil, zero value otherwise.

### GetDisplayFlagOk

`func (o *CountryType) GetDisplayFlagOk() (*bool, bool)`

GetDisplayFlagOk returns a tuple with the DisplayFlag field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayFlag

`func (o *CountryType) SetDisplayFlag(v bool)`

SetDisplayFlag sets DisplayFlag field to given value.

### HasDisplayFlag

`func (o *CountryType) HasDisplayFlag() bool`

HasDisplayFlag returns a boolean if a field has been set.

### GetDisplaySequence

`func (o *CountryType) GetDisplaySequence() float32`

GetDisplaySequence returns the DisplaySequence field if non-nil, zero value otherwise.

### GetDisplaySequenceOk

`func (o *CountryType) GetDisplaySequenceOk() (*float32, bool)`

GetDisplaySequenceOk returns a tuple with the DisplaySequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySequence

`func (o *CountryType) SetDisplaySequence(v float32)`

SetDisplaySequence sets DisplaySequence field to given value.

### HasDisplaySequence

`func (o *CountryType) HasDisplaySequence() bool`

HasDisplaySequence returns a boolean if a field has been set.

### GetGuestAddressFormat

`func (o *CountryType) GetGuestAddressFormat() string`

GetGuestAddressFormat returns the GuestAddressFormat field if non-nil, zero value otherwise.

### GetGuestAddressFormatOk

`func (o *CountryType) GetGuestAddressFormatOk() (*string, bool)`

GetGuestAddressFormatOk returns a tuple with the GuestAddressFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestAddressFormat

`func (o *CountryType) SetGuestAddressFormat(v string)`

SetGuestAddressFormat sets GuestAddressFormat field to given value.

### HasGuestAddressFormat

`func (o *CountryType) HasGuestAddressFormat() bool`

HasGuestAddressFormat returns a boolean if a field has been set.

### GetHotelId

`func (o *CountryType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CountryType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CountryType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CountryType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetIsoCode

`func (o *CountryType) GetIsoCode() string`

GetIsoCode returns the IsoCode field if non-nil, zero value otherwise.

### GetIsoCodeOk

`func (o *CountryType) GetIsoCodeOk() (*string, bool)`

GetIsoCodeOk returns a tuple with the IsoCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsoCode

`func (o *CountryType) SetIsoCode(v string)`

SetIsoCode sets IsoCode field to given value.

### HasIsoCode

`func (o *CountryType) HasIsoCode() bool`

HasIsoCode returns a boolean if a field has been set.

### GetIsoName

`func (o *CountryType) GetIsoName() string`

GetIsoName returns the IsoName field if non-nil, zero value otherwise.

### GetIsoNameOk

`func (o *CountryType) GetIsoNameOk() (*string, bool)`

GetIsoNameOk returns a tuple with the IsoName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsoName

`func (o *CountryType) SetIsoName(v string)`

SetIsoName sets IsoName field to given value.

### HasIsoName

`func (o *CountryType) HasIsoName() bool`

HasIsoName returns a boolean if a field has been set.

### GetMainGroup

`func (o *CountryType) GetMainGroup() string`

GetMainGroup returns the MainGroup field if non-nil, zero value otherwise.

### GetMainGroupOk

`func (o *CountryType) GetMainGroupOk() (*string, bool)`

GetMainGroupOk returns a tuple with the MainGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMainGroup

`func (o *CountryType) SetMainGroup(v string)`

SetMainGroup sets MainGroup field to given value.

### HasMainGroup

`func (o *CountryType) HasMainGroup() bool`

HasMainGroup returns a boolean if a field has been set.

### GetName

`func (o *CountryType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CountryType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CountryType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *CountryType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPrintSequence

`func (o *CountryType) GetPrintSequence() float32`

GetPrintSequence returns the PrintSequence field if non-nil, zero value otherwise.

### GetPrintSequenceOk

`func (o *CountryType) GetPrintSequenceOk() (*float32, bool)`

GetPrintSequenceOk returns a tuple with the PrintSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrintSequence

`func (o *CountryType) SetPrintSequence(v float32)`

SetPrintSequence sets PrintSequence field to given value.

### HasPrintSequence

`func (o *CountryType) HasPrintSequence() bool`

HasPrintSequence returns a boolean if a field has been set.

### GetRegionCode

`func (o *CountryType) GetRegionCode() string`

GetRegionCode returns the RegionCode field if non-nil, zero value otherwise.

### GetRegionCodeOk

`func (o *CountryType) GetRegionCodeOk() (*string, bool)`

GetRegionCodeOk returns a tuple with the RegionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegionCode

`func (o *CountryType) SetRegionCode(v string)`

SetRegionCode sets RegionCode field to given value.

### HasRegionCode

`func (o *CountryType) HasRegionCode() bool`

HasRegionCode returns a boolean if a field has been set.

### GetStatisticCode

`func (o *CountryType) GetStatisticCode() string`

GetStatisticCode returns the StatisticCode field if non-nil, zero value otherwise.

### GetStatisticCodeOk

`func (o *CountryType) GetStatisticCodeOk() (*string, bool)`

GetStatisticCodeOk returns a tuple with the StatisticCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatisticCode

`func (o *CountryType) SetStatisticCode(v string)`

SetStatisticCode sets StatisticCode field to given value.

### HasStatisticCode

`func (o *CountryType) HasStatisticCode() bool`

HasStatisticCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



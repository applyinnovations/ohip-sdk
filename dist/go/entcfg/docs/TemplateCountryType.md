# TemplateCountryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Name for the country. | [optional] 
**StatisticCode** | Pointer to **string** | Statistic code for the country. | [optional] 
**GuestAddressFormat** | Pointer to **string** | Guest Address format Codes for confirmation letter. | [optional] 
**AddressDoctorMode** | Pointer to **string** | Defines the mode used to invoke address doctor service. | [optional] 
**MainGroup** | Pointer to **string** | Main Group of Country. Used in statistic reports. | [optional] 
**RegionCode** | Pointer to **string** | Regin to which the Country belongs. | [optional] 
**IsoCode** | Pointer to **string** | ISO standard code for country. | [optional] 
**IsoName** | Pointer to **string** | ISO standard name for country. | [optional] 
**DisplaySequence** | Pointer to **float32** | Sequence number for displaying the countries. | [optional] 
**PrintSequence** | Pointer to **float32** | Print Sequence number for report. | [optional] 
**DisplayFlag** | Pointer to **bool** | Indicates if the country flag should be displayed. | [optional] 
**CountryCode** | Pointer to **string** | Country code identifying the country. | [optional] 

## Methods

### NewTemplateCountryType

`func NewTemplateCountryType() *TemplateCountryType`

NewTemplateCountryType instantiates a new TemplateCountryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateCountryTypeWithDefaults

`func NewTemplateCountryTypeWithDefaults() *TemplateCountryType`

NewTemplateCountryTypeWithDefaults instantiates a new TemplateCountryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *TemplateCountryType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *TemplateCountryType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *TemplateCountryType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *TemplateCountryType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetStatisticCode

`func (o *TemplateCountryType) GetStatisticCode() string`

GetStatisticCode returns the StatisticCode field if non-nil, zero value otherwise.

### GetStatisticCodeOk

`func (o *TemplateCountryType) GetStatisticCodeOk() (*string, bool)`

GetStatisticCodeOk returns a tuple with the StatisticCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatisticCode

`func (o *TemplateCountryType) SetStatisticCode(v string)`

SetStatisticCode sets StatisticCode field to given value.

### HasStatisticCode

`func (o *TemplateCountryType) HasStatisticCode() bool`

HasStatisticCode returns a boolean if a field has been set.

### GetGuestAddressFormat

`func (o *TemplateCountryType) GetGuestAddressFormat() string`

GetGuestAddressFormat returns the GuestAddressFormat field if non-nil, zero value otherwise.

### GetGuestAddressFormatOk

`func (o *TemplateCountryType) GetGuestAddressFormatOk() (*string, bool)`

GetGuestAddressFormatOk returns a tuple with the GuestAddressFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestAddressFormat

`func (o *TemplateCountryType) SetGuestAddressFormat(v string)`

SetGuestAddressFormat sets GuestAddressFormat field to given value.

### HasGuestAddressFormat

`func (o *TemplateCountryType) HasGuestAddressFormat() bool`

HasGuestAddressFormat returns a boolean if a field has been set.

### GetAddressDoctorMode

`func (o *TemplateCountryType) GetAddressDoctorMode() string`

GetAddressDoctorMode returns the AddressDoctorMode field if non-nil, zero value otherwise.

### GetAddressDoctorModeOk

`func (o *TemplateCountryType) GetAddressDoctorModeOk() (*string, bool)`

GetAddressDoctorModeOk returns a tuple with the AddressDoctorMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddressDoctorMode

`func (o *TemplateCountryType) SetAddressDoctorMode(v string)`

SetAddressDoctorMode sets AddressDoctorMode field to given value.

### HasAddressDoctorMode

`func (o *TemplateCountryType) HasAddressDoctorMode() bool`

HasAddressDoctorMode returns a boolean if a field has been set.

### GetMainGroup

`func (o *TemplateCountryType) GetMainGroup() string`

GetMainGroup returns the MainGroup field if non-nil, zero value otherwise.

### GetMainGroupOk

`func (o *TemplateCountryType) GetMainGroupOk() (*string, bool)`

GetMainGroupOk returns a tuple with the MainGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMainGroup

`func (o *TemplateCountryType) SetMainGroup(v string)`

SetMainGroup sets MainGroup field to given value.

### HasMainGroup

`func (o *TemplateCountryType) HasMainGroup() bool`

HasMainGroup returns a boolean if a field has been set.

### GetRegionCode

`func (o *TemplateCountryType) GetRegionCode() string`

GetRegionCode returns the RegionCode field if non-nil, zero value otherwise.

### GetRegionCodeOk

`func (o *TemplateCountryType) GetRegionCodeOk() (*string, bool)`

GetRegionCodeOk returns a tuple with the RegionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegionCode

`func (o *TemplateCountryType) SetRegionCode(v string)`

SetRegionCode sets RegionCode field to given value.

### HasRegionCode

`func (o *TemplateCountryType) HasRegionCode() bool`

HasRegionCode returns a boolean if a field has been set.

### GetIsoCode

`func (o *TemplateCountryType) GetIsoCode() string`

GetIsoCode returns the IsoCode field if non-nil, zero value otherwise.

### GetIsoCodeOk

`func (o *TemplateCountryType) GetIsoCodeOk() (*string, bool)`

GetIsoCodeOk returns a tuple with the IsoCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsoCode

`func (o *TemplateCountryType) SetIsoCode(v string)`

SetIsoCode sets IsoCode field to given value.

### HasIsoCode

`func (o *TemplateCountryType) HasIsoCode() bool`

HasIsoCode returns a boolean if a field has been set.

### GetIsoName

`func (o *TemplateCountryType) GetIsoName() string`

GetIsoName returns the IsoName field if non-nil, zero value otherwise.

### GetIsoNameOk

`func (o *TemplateCountryType) GetIsoNameOk() (*string, bool)`

GetIsoNameOk returns a tuple with the IsoName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsoName

`func (o *TemplateCountryType) SetIsoName(v string)`

SetIsoName sets IsoName field to given value.

### HasIsoName

`func (o *TemplateCountryType) HasIsoName() bool`

HasIsoName returns a boolean if a field has been set.

### GetDisplaySequence

`func (o *TemplateCountryType) GetDisplaySequence() float32`

GetDisplaySequence returns the DisplaySequence field if non-nil, zero value otherwise.

### GetDisplaySequenceOk

`func (o *TemplateCountryType) GetDisplaySequenceOk() (*float32, bool)`

GetDisplaySequenceOk returns a tuple with the DisplaySequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySequence

`func (o *TemplateCountryType) SetDisplaySequence(v float32)`

SetDisplaySequence sets DisplaySequence field to given value.

### HasDisplaySequence

`func (o *TemplateCountryType) HasDisplaySequence() bool`

HasDisplaySequence returns a boolean if a field has been set.

### GetPrintSequence

`func (o *TemplateCountryType) GetPrintSequence() float32`

GetPrintSequence returns the PrintSequence field if non-nil, zero value otherwise.

### GetPrintSequenceOk

`func (o *TemplateCountryType) GetPrintSequenceOk() (*float32, bool)`

GetPrintSequenceOk returns a tuple with the PrintSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrintSequence

`func (o *TemplateCountryType) SetPrintSequence(v float32)`

SetPrintSequence sets PrintSequence field to given value.

### HasPrintSequence

`func (o *TemplateCountryType) HasPrintSequence() bool`

HasPrintSequence returns a boolean if a field has been set.

### GetDisplayFlag

`func (o *TemplateCountryType) GetDisplayFlag() bool`

GetDisplayFlag returns the DisplayFlag field if non-nil, zero value otherwise.

### GetDisplayFlagOk

`func (o *TemplateCountryType) GetDisplayFlagOk() (*bool, bool)`

GetDisplayFlagOk returns a tuple with the DisplayFlag field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayFlag

`func (o *TemplateCountryType) SetDisplayFlag(v bool)`

SetDisplayFlag sets DisplayFlag field to given value.

### HasDisplayFlag

`func (o *TemplateCountryType) HasDisplayFlag() bool`

HasDisplayFlag returns a boolean if a field has been set.

### GetCountryCode

`func (o *TemplateCountryType) GetCountryCode() string`

GetCountryCode returns the CountryCode field if non-nil, zero value otherwise.

### GetCountryCodeOk

`func (o *TemplateCountryType) GetCountryCodeOk() (*string, bool)`

GetCountryCodeOk returns a tuple with the CountryCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountryCode

`func (o *TemplateCountryType) SetCountryCode(v string)`

SetCountryCode sets CountryCode field to given value.

### HasCountryCode

`func (o *TemplateCountryType) HasCountryCode() bool`

HasCountryCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



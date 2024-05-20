# AddressFormats

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Formats** | Pointer to [**[]AddressFormatType**](AddressFormatType.md) | An Address formats. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAddressFormats

`func NewAddressFormats() *AddressFormats`

NewAddressFormats instantiates a new AddressFormats object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAddressFormatsWithDefaults

`func NewAddressFormatsWithDefaults() *AddressFormats`

NewAddressFormatsWithDefaults instantiates a new AddressFormats object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFormats

`func (o *AddressFormats) GetFormats() []AddressFormatType`

GetFormats returns the Formats field if non-nil, zero value otherwise.

### GetFormatsOk

`func (o *AddressFormats) GetFormatsOk() (*[]AddressFormatType, bool)`

GetFormatsOk returns a tuple with the Formats field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormats

`func (o *AddressFormats) SetFormats(v []AddressFormatType)`

SetFormats sets Formats field to given value.

### HasFormats

`func (o *AddressFormats) HasFormats() bool`

HasFormats returns a boolean if a field has been set.

### GetLinks

`func (o *AddressFormats) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AddressFormats) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AddressFormats) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AddressFormats) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AddressFormats) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AddressFormats) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AddressFormats) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AddressFormats) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



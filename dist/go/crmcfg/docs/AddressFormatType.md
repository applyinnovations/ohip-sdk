# AddressFormatType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FormatCode** | Pointer to **string** | Address format code. | [optional] 
**FormatDefinition** | Pointer to **string** | Address format definition with the elements of the address. | [optional] 
**Description** | Pointer to **string** | Description of the address format. | [optional] 
**DisplayOrder** | Pointer to **float32** | sequence number of the address format. | [optional] 
**FormattedExample** | Pointer to **string** | An example address formatted with the current format definition. | [optional] 
**SalesFormat** | Pointer to **bool** | Determines if the format is a sales format or not. | [optional] 
**CanDelete** | Pointer to **bool** | Determines whether this address format can be deleted. | [optional] 

## Methods

### NewAddressFormatType

`func NewAddressFormatType() *AddressFormatType`

NewAddressFormatType instantiates a new AddressFormatType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAddressFormatTypeWithDefaults

`func NewAddressFormatTypeWithDefaults() *AddressFormatType`

NewAddressFormatTypeWithDefaults instantiates a new AddressFormatType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFormatCode

`func (o *AddressFormatType) GetFormatCode() string`

GetFormatCode returns the FormatCode field if non-nil, zero value otherwise.

### GetFormatCodeOk

`func (o *AddressFormatType) GetFormatCodeOk() (*string, bool)`

GetFormatCodeOk returns a tuple with the FormatCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormatCode

`func (o *AddressFormatType) SetFormatCode(v string)`

SetFormatCode sets FormatCode field to given value.

### HasFormatCode

`func (o *AddressFormatType) HasFormatCode() bool`

HasFormatCode returns a boolean if a field has been set.

### GetFormatDefinition

`func (o *AddressFormatType) GetFormatDefinition() string`

GetFormatDefinition returns the FormatDefinition field if non-nil, zero value otherwise.

### GetFormatDefinitionOk

`func (o *AddressFormatType) GetFormatDefinitionOk() (*string, bool)`

GetFormatDefinitionOk returns a tuple with the FormatDefinition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormatDefinition

`func (o *AddressFormatType) SetFormatDefinition(v string)`

SetFormatDefinition sets FormatDefinition field to given value.

### HasFormatDefinition

`func (o *AddressFormatType) HasFormatDefinition() bool`

HasFormatDefinition returns a boolean if a field has been set.

### GetDescription

`func (o *AddressFormatType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AddressFormatType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AddressFormatType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AddressFormatType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisplayOrder

`func (o *AddressFormatType) GetDisplayOrder() float32`

GetDisplayOrder returns the DisplayOrder field if non-nil, zero value otherwise.

### GetDisplayOrderOk

`func (o *AddressFormatType) GetDisplayOrderOk() (*float32, bool)`

GetDisplayOrderOk returns a tuple with the DisplayOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayOrder

`func (o *AddressFormatType) SetDisplayOrder(v float32)`

SetDisplayOrder sets DisplayOrder field to given value.

### HasDisplayOrder

`func (o *AddressFormatType) HasDisplayOrder() bool`

HasDisplayOrder returns a boolean if a field has been set.

### GetFormattedExample

`func (o *AddressFormatType) GetFormattedExample() string`

GetFormattedExample returns the FormattedExample field if non-nil, zero value otherwise.

### GetFormattedExampleOk

`func (o *AddressFormatType) GetFormattedExampleOk() (*string, bool)`

GetFormattedExampleOk returns a tuple with the FormattedExample field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormattedExample

`func (o *AddressFormatType) SetFormattedExample(v string)`

SetFormattedExample sets FormattedExample field to given value.

### HasFormattedExample

`func (o *AddressFormatType) HasFormattedExample() bool`

HasFormattedExample returns a boolean if a field has been set.

### GetSalesFormat

`func (o *AddressFormatType) GetSalesFormat() bool`

GetSalesFormat returns the SalesFormat field if non-nil, zero value otherwise.

### GetSalesFormatOk

`func (o *AddressFormatType) GetSalesFormatOk() (*bool, bool)`

GetSalesFormatOk returns a tuple with the SalesFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesFormat

`func (o *AddressFormatType) SetSalesFormat(v bool)`

SetSalesFormat sets SalesFormat field to given value.

### HasSalesFormat

`func (o *AddressFormatType) HasSalesFormat() bool`

HasSalesFormat returns a boolean if a field has been set.

### GetCanDelete

`func (o *AddressFormatType) GetCanDelete() bool`

GetCanDelete returns the CanDelete field if non-nil, zero value otherwise.

### GetCanDeleteOk

`func (o *AddressFormatType) GetCanDeleteOk() (*bool, bool)`

GetCanDeleteOk returns a tuple with the CanDelete field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCanDelete

`func (o *AddressFormatType) SetCanDelete(v bool)`

SetCanDelete sets CanDelete field to given value.

### HasCanDelete

`func (o *AddressFormatType) HasCanDelete() bool`

HasCanDelete returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ConvertedValueType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OperaValue** | Pointer to **string** | Opera Value | [optional] 
**ExternalValue** | Pointer to **string** | Value used by the external vendors. | [optional] 
**ConversionCode** | Pointer to [**DataValueMappingCodeType**](DataValueMappingCodeType.md) |  | [optional] 
**MasterValue** | Pointer to **string** | Opera Master Value | [optional] 
**PmsDefaultConversion** | Pointer to **bool** | The flag will be true for all the conversions that are pms defaults. In case there are more than one conversions available in opera. | [optional] 
**CrsDefaultConversion** | Pointer to **bool** | The flag will be true for all the conversions that are crs defaults. In case there are more than one conversions available in opera. | [optional] 

## Methods

### NewConvertedValueType

`func NewConvertedValueType() *ConvertedValueType`

NewConvertedValueType instantiates a new ConvertedValueType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConvertedValueTypeWithDefaults

`func NewConvertedValueTypeWithDefaults() *ConvertedValueType`

NewConvertedValueTypeWithDefaults instantiates a new ConvertedValueType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOperaValue

`func (o *ConvertedValueType) GetOperaValue() string`

GetOperaValue returns the OperaValue field if non-nil, zero value otherwise.

### GetOperaValueOk

`func (o *ConvertedValueType) GetOperaValueOk() (*string, bool)`

GetOperaValueOk returns a tuple with the OperaValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperaValue

`func (o *ConvertedValueType) SetOperaValue(v string)`

SetOperaValue sets OperaValue field to given value.

### HasOperaValue

`func (o *ConvertedValueType) HasOperaValue() bool`

HasOperaValue returns a boolean if a field has been set.

### GetExternalValue

`func (o *ConvertedValueType) GetExternalValue() string`

GetExternalValue returns the ExternalValue field if non-nil, zero value otherwise.

### GetExternalValueOk

`func (o *ConvertedValueType) GetExternalValueOk() (*string, bool)`

GetExternalValueOk returns a tuple with the ExternalValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalValue

`func (o *ConvertedValueType) SetExternalValue(v string)`

SetExternalValue sets ExternalValue field to given value.

### HasExternalValue

`func (o *ConvertedValueType) HasExternalValue() bool`

HasExternalValue returns a boolean if a field has been set.

### GetConversionCode

`func (o *ConvertedValueType) GetConversionCode() DataValueMappingCodeType`

GetConversionCode returns the ConversionCode field if non-nil, zero value otherwise.

### GetConversionCodeOk

`func (o *ConvertedValueType) GetConversionCodeOk() (*DataValueMappingCodeType, bool)`

GetConversionCodeOk returns a tuple with the ConversionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConversionCode

`func (o *ConvertedValueType) SetConversionCode(v DataValueMappingCodeType)`

SetConversionCode sets ConversionCode field to given value.

### HasConversionCode

`func (o *ConvertedValueType) HasConversionCode() bool`

HasConversionCode returns a boolean if a field has been set.

### GetMasterValue

`func (o *ConvertedValueType) GetMasterValue() string`

GetMasterValue returns the MasterValue field if non-nil, zero value otherwise.

### GetMasterValueOk

`func (o *ConvertedValueType) GetMasterValueOk() (*string, bool)`

GetMasterValueOk returns a tuple with the MasterValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterValue

`func (o *ConvertedValueType) SetMasterValue(v string)`

SetMasterValue sets MasterValue field to given value.

### HasMasterValue

`func (o *ConvertedValueType) HasMasterValue() bool`

HasMasterValue returns a boolean if a field has been set.

### GetPmsDefaultConversion

`func (o *ConvertedValueType) GetPmsDefaultConversion() bool`

GetPmsDefaultConversion returns the PmsDefaultConversion field if non-nil, zero value otherwise.

### GetPmsDefaultConversionOk

`func (o *ConvertedValueType) GetPmsDefaultConversionOk() (*bool, bool)`

GetPmsDefaultConversionOk returns a tuple with the PmsDefaultConversion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPmsDefaultConversion

`func (o *ConvertedValueType) SetPmsDefaultConversion(v bool)`

SetPmsDefaultConversion sets PmsDefaultConversion field to given value.

### HasPmsDefaultConversion

`func (o *ConvertedValueType) HasPmsDefaultConversion() bool`

HasPmsDefaultConversion returns a boolean if a field has been set.

### GetCrsDefaultConversion

`func (o *ConvertedValueType) GetCrsDefaultConversion() bool`

GetCrsDefaultConversion returns the CrsDefaultConversion field if non-nil, zero value otherwise.

### GetCrsDefaultConversionOk

`func (o *ConvertedValueType) GetCrsDefaultConversionOk() (*bool, bool)`

GetCrsDefaultConversionOk returns a tuple with the CrsDefaultConversion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCrsDefaultConversion

`func (o *ConvertedValueType) SetCrsDefaultConversion(v bool)`

SetCrsDefaultConversion sets CrsDefaultConversion field to given value.

### HasCrsDefaultConversion

`func (o *ConvertedValueType) HasCrsDefaultConversion() bool`

HasCrsDefaultConversion returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



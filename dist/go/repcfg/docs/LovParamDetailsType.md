# LovParamDetailsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LovSql** | Pointer to **string** | Query statement for LOV based report parameters. | [optional] 
**LOVs** | Pointer to [**[]ParamLOVType**](ParamLOVType.md) | List of values for report parameter. | [optional] 
**LovValidate** | Pointer to **bool** | Flag to indicate that input should be validated against LOV. | [optional] 
**LovMultiSelect** | Pointer to **bool** | This attribute is used to indicate if an LOV defined is multi-select. This is particularly useful for simple reports. | [optional] 

## Methods

### NewLovParamDetailsType

`func NewLovParamDetailsType() *LovParamDetailsType`

NewLovParamDetailsType instantiates a new LovParamDetailsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLovParamDetailsTypeWithDefaults

`func NewLovParamDetailsTypeWithDefaults() *LovParamDetailsType`

NewLovParamDetailsTypeWithDefaults instantiates a new LovParamDetailsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLovSql

`func (o *LovParamDetailsType) GetLovSql() string`

GetLovSql returns the LovSql field if non-nil, zero value otherwise.

### GetLovSqlOk

`func (o *LovParamDetailsType) GetLovSqlOk() (*string, bool)`

GetLovSqlOk returns a tuple with the LovSql field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLovSql

`func (o *LovParamDetailsType) SetLovSql(v string)`

SetLovSql sets LovSql field to given value.

### HasLovSql

`func (o *LovParamDetailsType) HasLovSql() bool`

HasLovSql returns a boolean if a field has been set.

### GetLOVs

`func (o *LovParamDetailsType) GetLOVs() []ParamLOVType`

GetLOVs returns the LOVs field if non-nil, zero value otherwise.

### GetLOVsOk

`func (o *LovParamDetailsType) GetLOVsOk() (*[]ParamLOVType, bool)`

GetLOVsOk returns a tuple with the LOVs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLOVs

`func (o *LovParamDetailsType) SetLOVs(v []ParamLOVType)`

SetLOVs sets LOVs field to given value.

### HasLOVs

`func (o *LovParamDetailsType) HasLOVs() bool`

HasLOVs returns a boolean if a field has been set.

### GetLovValidate

`func (o *LovParamDetailsType) GetLovValidate() bool`

GetLovValidate returns the LovValidate field if non-nil, zero value otherwise.

### GetLovValidateOk

`func (o *LovParamDetailsType) GetLovValidateOk() (*bool, bool)`

GetLovValidateOk returns a tuple with the LovValidate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLovValidate

`func (o *LovParamDetailsType) SetLovValidate(v bool)`

SetLovValidate sets LovValidate field to given value.

### HasLovValidate

`func (o *LovParamDetailsType) HasLovValidate() bool`

HasLovValidate returns a boolean if a field has been set.

### GetLovMultiSelect

`func (o *LovParamDetailsType) GetLovMultiSelect() bool`

GetLovMultiSelect returns the LovMultiSelect field if non-nil, zero value otherwise.

### GetLovMultiSelectOk

`func (o *LovParamDetailsType) GetLovMultiSelectOk() (*bool, bool)`

GetLovMultiSelectOk returns a tuple with the LovMultiSelect field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLovMultiSelect

`func (o *LovParamDetailsType) SetLovMultiSelect(v bool)`

SetLovMultiSelect sets LovMultiSelect field to given value.

### HasLovMultiSelect

`func (o *LovParamDetailsType) HasLovMultiSelect() bool`

HasLovMultiSelect returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



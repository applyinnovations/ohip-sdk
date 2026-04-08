# AutoTraceCodeDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TraceCode** | Pointer to **string** | Trace Code. | [optional] 
**Description** | Pointer to **string** | Description for the Trace Code. | [optional] 
**TraceGroup** | Pointer to [**AutoTraceGroupConfigType**](AutoTraceGroupConfigType.md) |  | [optional] 

## Methods

### NewAutoTraceCodeDetailType

`func NewAutoTraceCodeDetailType() *AutoTraceCodeDetailType`

NewAutoTraceCodeDetailType instantiates a new AutoTraceCodeDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAutoTraceCodeDetailTypeWithDefaults

`func NewAutoTraceCodeDetailTypeWithDefaults() *AutoTraceCodeDetailType`

NewAutoTraceCodeDetailTypeWithDefaults instantiates a new AutoTraceCodeDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTraceCode

`func (o *AutoTraceCodeDetailType) GetTraceCode() string`

GetTraceCode returns the TraceCode field if non-nil, zero value otherwise.

### GetTraceCodeOk

`func (o *AutoTraceCodeDetailType) GetTraceCodeOk() (*string, bool)`

GetTraceCodeOk returns a tuple with the TraceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraceCode

`func (o *AutoTraceCodeDetailType) SetTraceCode(v string)`

SetTraceCode sets TraceCode field to given value.

### HasTraceCode

`func (o *AutoTraceCodeDetailType) HasTraceCode() bool`

HasTraceCode returns a boolean if a field has been set.

### GetDescription

`func (o *AutoTraceCodeDetailType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AutoTraceCodeDetailType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AutoTraceCodeDetailType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AutoTraceCodeDetailType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetTraceGroup

`func (o *AutoTraceCodeDetailType) GetTraceGroup() AutoTraceGroupConfigType`

GetTraceGroup returns the TraceGroup field if non-nil, zero value otherwise.

### GetTraceGroupOk

`func (o *AutoTraceCodeDetailType) GetTraceGroupOk() (*AutoTraceGroupConfigType, bool)`

GetTraceGroupOk returns a tuple with the TraceGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraceGroup

`func (o *AutoTraceCodeDetailType) SetTraceGroup(v AutoTraceGroupConfigType)`

SetTraceGroup sets TraceGroup field to given value.

### HasTraceGroup

`func (o *AutoTraceCodeDetailType) HasTraceGroup() bool`

HasTraceGroup returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



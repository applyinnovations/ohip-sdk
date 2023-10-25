# AutoTraceDefinitionDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AutoTraceBlockCategory** | Pointer to [**AutoTraceBlockCategoryType**](AutoTraceBlockCategoryType.md) |  | [optional] 
**AutoTraceId** | Pointer to [**AutoTraceId**](AutoTraceId.md) |  | [optional] 
**AutoTraceTrigger** | Pointer to [**AutoTraceTriggerCategoryType**](AutoTraceTriggerCategoryType.md) |  | [optional] 
**Conditions** | Pointer to [**ConditionGroupType**](ConditionGroupType.md) |  | [optional] 
**FieldNameOnUpdate** | Pointer to **string** | Element to hold column name of relavant table on selection of Update in AutoTraceTriggerCategoryType. | [optional] 
**FieldNameOnUpdateId** | Pointer to **string** | Element to hold column ID of relavant table on selection of Update in AutoTraceTriggerCategoryType. | [optional] 
**HotelId** | Pointer to **string** | The hotel code where the Auto Trace should be created. | [optional] 
**TraceCode** | Pointer to **string** | Trace code | [optional] 
**TraceGroup** | Pointer to [**AutoTraceGroupConfigType**](AutoTraceGroupConfigType.md) |  | [optional] 

## Methods

### NewAutoTraceDefinitionDetailType

`func NewAutoTraceDefinitionDetailType() *AutoTraceDefinitionDetailType`

NewAutoTraceDefinitionDetailType instantiates a new AutoTraceDefinitionDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAutoTraceDefinitionDetailTypeWithDefaults

`func NewAutoTraceDefinitionDetailTypeWithDefaults() *AutoTraceDefinitionDetailType`

NewAutoTraceDefinitionDetailTypeWithDefaults instantiates a new AutoTraceDefinitionDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAutoTraceBlockCategory

`func (o *AutoTraceDefinitionDetailType) GetAutoTraceBlockCategory() AutoTraceBlockCategoryType`

GetAutoTraceBlockCategory returns the AutoTraceBlockCategory field if non-nil, zero value otherwise.

### GetAutoTraceBlockCategoryOk

`func (o *AutoTraceDefinitionDetailType) GetAutoTraceBlockCategoryOk() (*AutoTraceBlockCategoryType, bool)`

GetAutoTraceBlockCategoryOk returns a tuple with the AutoTraceBlockCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoTraceBlockCategory

`func (o *AutoTraceDefinitionDetailType) SetAutoTraceBlockCategory(v AutoTraceBlockCategoryType)`

SetAutoTraceBlockCategory sets AutoTraceBlockCategory field to given value.

### HasAutoTraceBlockCategory

`func (o *AutoTraceDefinitionDetailType) HasAutoTraceBlockCategory() bool`

HasAutoTraceBlockCategory returns a boolean if a field has been set.

### GetAutoTraceId

`func (o *AutoTraceDefinitionDetailType) GetAutoTraceId() AutoTraceId`

GetAutoTraceId returns the AutoTraceId field if non-nil, zero value otherwise.

### GetAutoTraceIdOk

`func (o *AutoTraceDefinitionDetailType) GetAutoTraceIdOk() (*AutoTraceId, bool)`

GetAutoTraceIdOk returns a tuple with the AutoTraceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoTraceId

`func (o *AutoTraceDefinitionDetailType) SetAutoTraceId(v AutoTraceId)`

SetAutoTraceId sets AutoTraceId field to given value.

### HasAutoTraceId

`func (o *AutoTraceDefinitionDetailType) HasAutoTraceId() bool`

HasAutoTraceId returns a boolean if a field has been set.

### GetAutoTraceTrigger

`func (o *AutoTraceDefinitionDetailType) GetAutoTraceTrigger() AutoTraceTriggerCategoryType`

GetAutoTraceTrigger returns the AutoTraceTrigger field if non-nil, zero value otherwise.

### GetAutoTraceTriggerOk

`func (o *AutoTraceDefinitionDetailType) GetAutoTraceTriggerOk() (*AutoTraceTriggerCategoryType, bool)`

GetAutoTraceTriggerOk returns a tuple with the AutoTraceTrigger field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoTraceTrigger

`func (o *AutoTraceDefinitionDetailType) SetAutoTraceTrigger(v AutoTraceTriggerCategoryType)`

SetAutoTraceTrigger sets AutoTraceTrigger field to given value.

### HasAutoTraceTrigger

`func (o *AutoTraceDefinitionDetailType) HasAutoTraceTrigger() bool`

HasAutoTraceTrigger returns a boolean if a field has been set.

### GetConditions

`func (o *AutoTraceDefinitionDetailType) GetConditions() ConditionGroupType`

GetConditions returns the Conditions field if non-nil, zero value otherwise.

### GetConditionsOk

`func (o *AutoTraceDefinitionDetailType) GetConditionsOk() (*ConditionGroupType, bool)`

GetConditionsOk returns a tuple with the Conditions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConditions

`func (o *AutoTraceDefinitionDetailType) SetConditions(v ConditionGroupType)`

SetConditions sets Conditions field to given value.

### HasConditions

`func (o *AutoTraceDefinitionDetailType) HasConditions() bool`

HasConditions returns a boolean if a field has been set.

### GetFieldNameOnUpdate

`func (o *AutoTraceDefinitionDetailType) GetFieldNameOnUpdate() string`

GetFieldNameOnUpdate returns the FieldNameOnUpdate field if non-nil, zero value otherwise.

### GetFieldNameOnUpdateOk

`func (o *AutoTraceDefinitionDetailType) GetFieldNameOnUpdateOk() (*string, bool)`

GetFieldNameOnUpdateOk returns a tuple with the FieldNameOnUpdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFieldNameOnUpdate

`func (o *AutoTraceDefinitionDetailType) SetFieldNameOnUpdate(v string)`

SetFieldNameOnUpdate sets FieldNameOnUpdate field to given value.

### HasFieldNameOnUpdate

`func (o *AutoTraceDefinitionDetailType) HasFieldNameOnUpdate() bool`

HasFieldNameOnUpdate returns a boolean if a field has been set.

### GetFieldNameOnUpdateId

`func (o *AutoTraceDefinitionDetailType) GetFieldNameOnUpdateId() string`

GetFieldNameOnUpdateId returns the FieldNameOnUpdateId field if non-nil, zero value otherwise.

### GetFieldNameOnUpdateIdOk

`func (o *AutoTraceDefinitionDetailType) GetFieldNameOnUpdateIdOk() (*string, bool)`

GetFieldNameOnUpdateIdOk returns a tuple with the FieldNameOnUpdateId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFieldNameOnUpdateId

`func (o *AutoTraceDefinitionDetailType) SetFieldNameOnUpdateId(v string)`

SetFieldNameOnUpdateId sets FieldNameOnUpdateId field to given value.

### HasFieldNameOnUpdateId

`func (o *AutoTraceDefinitionDetailType) HasFieldNameOnUpdateId() bool`

HasFieldNameOnUpdateId returns a boolean if a field has been set.

### GetHotelId

`func (o *AutoTraceDefinitionDetailType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *AutoTraceDefinitionDetailType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *AutoTraceDefinitionDetailType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *AutoTraceDefinitionDetailType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetTraceCode

`func (o *AutoTraceDefinitionDetailType) GetTraceCode() string`

GetTraceCode returns the TraceCode field if non-nil, zero value otherwise.

### GetTraceCodeOk

`func (o *AutoTraceDefinitionDetailType) GetTraceCodeOk() (*string, bool)`

GetTraceCodeOk returns a tuple with the TraceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraceCode

`func (o *AutoTraceDefinitionDetailType) SetTraceCode(v string)`

SetTraceCode sets TraceCode field to given value.

### HasTraceCode

`func (o *AutoTraceDefinitionDetailType) HasTraceCode() bool`

HasTraceCode returns a boolean if a field has been set.

### GetTraceGroup

`func (o *AutoTraceDefinitionDetailType) GetTraceGroup() AutoTraceGroupConfigType`

GetTraceGroup returns the TraceGroup field if non-nil, zero value otherwise.

### GetTraceGroupOk

`func (o *AutoTraceDefinitionDetailType) GetTraceGroupOk() (*AutoTraceGroupConfigType, bool)`

GetTraceGroupOk returns a tuple with the TraceGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraceGroup

`func (o *AutoTraceDefinitionDetailType) SetTraceGroup(v AutoTraceGroupConfigType)`

SetTraceGroup sets TraceGroup field to given value.

### HasTraceGroup

`func (o *AutoTraceDefinitionDetailType) HasTraceGroup() bool`

HasTraceGroup returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# AutoTraceDefinitionsInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AutoTraceDefinitions** | Pointer to [**[]AutoTraceDefinitionType**](AutoTraceDefinitionType.md) | Auto Trace Definition. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAutoTraceDefinitionsInfo

`func NewAutoTraceDefinitionsInfo() *AutoTraceDefinitionsInfo`

NewAutoTraceDefinitionsInfo instantiates a new AutoTraceDefinitionsInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAutoTraceDefinitionsInfoWithDefaults

`func NewAutoTraceDefinitionsInfoWithDefaults() *AutoTraceDefinitionsInfo`

NewAutoTraceDefinitionsInfoWithDefaults instantiates a new AutoTraceDefinitionsInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAutoTraceDefinitions

`func (o *AutoTraceDefinitionsInfo) GetAutoTraceDefinitions() []AutoTraceDefinitionType`

GetAutoTraceDefinitions returns the AutoTraceDefinitions field if non-nil, zero value otherwise.

### GetAutoTraceDefinitionsOk

`func (o *AutoTraceDefinitionsInfo) GetAutoTraceDefinitionsOk() (*[]AutoTraceDefinitionType, bool)`

GetAutoTraceDefinitionsOk returns a tuple with the AutoTraceDefinitions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoTraceDefinitions

`func (o *AutoTraceDefinitionsInfo) SetAutoTraceDefinitions(v []AutoTraceDefinitionType)`

SetAutoTraceDefinitions sets AutoTraceDefinitions field to given value.

### HasAutoTraceDefinitions

`func (o *AutoTraceDefinitionsInfo) HasAutoTraceDefinitions() bool`

HasAutoTraceDefinitions returns a boolean if a field has been set.

### GetWarnings

`func (o *AutoTraceDefinitionsInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AutoTraceDefinitionsInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AutoTraceDefinitionsInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AutoTraceDefinitionsInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



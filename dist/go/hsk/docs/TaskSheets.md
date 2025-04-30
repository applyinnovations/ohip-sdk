# TaskSheets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**AutoGenerateTaskSheetsCriteriaType**](AutoGenerateTaskSheetsCriteriaType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTaskSheets

`func NewTaskSheets() *TaskSheets`

NewTaskSheets instantiates a new TaskSheets object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaskSheetsWithDefaults

`func NewTaskSheetsWithDefaults() *TaskSheets`

NewTaskSheetsWithDefaults instantiates a new TaskSheets object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *TaskSheets) GetCriteria() AutoGenerateTaskSheetsCriteriaType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *TaskSheets) GetCriteriaOk() (*AutoGenerateTaskSheetsCriteriaType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *TaskSheets) SetCriteria(v AutoGenerateTaskSheetsCriteriaType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *TaskSheets) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *TaskSheets) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TaskSheets) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TaskSheets) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TaskSheets) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TaskSheets) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TaskSheets) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TaskSheets) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TaskSheets) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



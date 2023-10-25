# PutTaskSheetRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TaskSheetDetails** | Pointer to [**HousekeepingTaskType**](HousekeepingTaskType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutTaskSheetRequest

`func NewPutTaskSheetRequest() *PutTaskSheetRequest`

NewPutTaskSheetRequest instantiates a new PutTaskSheetRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutTaskSheetRequestWithDefaults

`func NewPutTaskSheetRequestWithDefaults() *PutTaskSheetRequest`

NewPutTaskSheetRequestWithDefaults instantiates a new PutTaskSheetRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutTaskSheetRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutTaskSheetRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutTaskSheetRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutTaskSheetRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTaskSheetDetails

`func (o *PutTaskSheetRequest) GetTaskSheetDetails() HousekeepingTaskType`

GetTaskSheetDetails returns the TaskSheetDetails field if non-nil, zero value otherwise.

### GetTaskSheetDetailsOk

`func (o *PutTaskSheetRequest) GetTaskSheetDetailsOk() (*HousekeepingTaskType, bool)`

GetTaskSheetDetailsOk returns a tuple with the TaskSheetDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskSheetDetails

`func (o *PutTaskSheetRequest) SetTaskSheetDetails(v HousekeepingTaskType)`

SetTaskSheetDetails sets TaskSheetDetails field to given value.

### HasTaskSheetDetails

`func (o *PutTaskSheetRequest) HasTaskSheetDetails() bool`

HasTaskSheetDetails returns a boolean if a field has been set.

### GetWarnings

`func (o *PutTaskSheetRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutTaskSheetRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutTaskSheetRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutTaskSheetRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



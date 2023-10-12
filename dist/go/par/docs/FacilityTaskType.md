# FacilityTaskType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Task** | Pointer to [**HousekeepingTaskCodeType**](HousekeepingTaskCodeType.md) |  | [optional] 
**Supplies** | Pointer to [**[]FacilityCodeType**](FacilityCodeType.md) | List of the facility codes. | [optional] 
**Date** | Pointer to **string** | The Date on which the task is applicable. | [optional] 

## Methods

### NewFacilityTaskType

`func NewFacilityTaskType() *FacilityTaskType`

NewFacilityTaskType instantiates a new FacilityTaskType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFacilityTaskTypeWithDefaults

`func NewFacilityTaskTypeWithDefaults() *FacilityTaskType`

NewFacilityTaskTypeWithDefaults instantiates a new FacilityTaskType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTask

`func (o *FacilityTaskType) GetTask() HousekeepingTaskCodeType`

GetTask returns the Task field if non-nil, zero value otherwise.

### GetTaskOk

`func (o *FacilityTaskType) GetTaskOk() (*HousekeepingTaskCodeType, bool)`

GetTaskOk returns a tuple with the Task field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTask

`func (o *FacilityTaskType) SetTask(v HousekeepingTaskCodeType)`

SetTask sets Task field to given value.

### HasTask

`func (o *FacilityTaskType) HasTask() bool`

HasTask returns a boolean if a field has been set.

### GetSupplies

`func (o *FacilityTaskType) GetSupplies() []FacilityCodeType`

GetSupplies returns the Supplies field if non-nil, zero value otherwise.

### GetSuppliesOk

`func (o *FacilityTaskType) GetSuppliesOk() (*[]FacilityCodeType, bool)`

GetSuppliesOk returns a tuple with the Supplies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupplies

`func (o *FacilityTaskType) SetSupplies(v []FacilityCodeType)`

SetSupplies sets Supplies field to given value.

### HasSupplies

`func (o *FacilityTaskType) HasSupplies() bool`

HasSupplies returns a boolean if a field has been set.

### GetDate

`func (o *FacilityTaskType) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *FacilityTaskType) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *FacilityTaskType) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *FacilityTaskType) HasDate() bool`

HasDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



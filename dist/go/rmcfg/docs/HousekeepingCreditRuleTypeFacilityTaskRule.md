# HousekeepingCreditRuleTypeFacilityTaskRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MinimumTaskCount** | Pointer to **int32** | When RuleType is set to FacilityTask, specifies the minimum number of the facility task that must be assigned to a sheet before the rule is applicable to that sheet. | [optional] 
**TaskCode** | Pointer to **string** | When RuleType is set to FacilityTask, specifies which task code makes this credit rule applicable. For example, the credit value will be added to the task assignment sheet when this specific task code is assigned. | [optional] 

## Methods

### NewHousekeepingCreditRuleTypeFacilityTaskRule

`func NewHousekeepingCreditRuleTypeFacilityTaskRule() *HousekeepingCreditRuleTypeFacilityTaskRule`

NewHousekeepingCreditRuleTypeFacilityTaskRule instantiates a new HousekeepingCreditRuleTypeFacilityTaskRule object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHousekeepingCreditRuleTypeFacilityTaskRuleWithDefaults

`func NewHousekeepingCreditRuleTypeFacilityTaskRuleWithDefaults() *HousekeepingCreditRuleTypeFacilityTaskRule`

NewHousekeepingCreditRuleTypeFacilityTaskRuleWithDefaults instantiates a new HousekeepingCreditRuleTypeFacilityTaskRule object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMinimumTaskCount

`func (o *HousekeepingCreditRuleTypeFacilityTaskRule) GetMinimumTaskCount() int32`

GetMinimumTaskCount returns the MinimumTaskCount field if non-nil, zero value otherwise.

### GetMinimumTaskCountOk

`func (o *HousekeepingCreditRuleTypeFacilityTaskRule) GetMinimumTaskCountOk() (*int32, bool)`

GetMinimumTaskCountOk returns a tuple with the MinimumTaskCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinimumTaskCount

`func (o *HousekeepingCreditRuleTypeFacilityTaskRule) SetMinimumTaskCount(v int32)`

SetMinimumTaskCount sets MinimumTaskCount field to given value.

### HasMinimumTaskCount

`func (o *HousekeepingCreditRuleTypeFacilityTaskRule) HasMinimumTaskCount() bool`

HasMinimumTaskCount returns a boolean if a field has been set.

### GetTaskCode

`func (o *HousekeepingCreditRuleTypeFacilityTaskRule) GetTaskCode() string`

GetTaskCode returns the TaskCode field if non-nil, zero value otherwise.

### GetTaskCodeOk

`func (o *HousekeepingCreditRuleTypeFacilityTaskRule) GetTaskCodeOk() (*string, bool)`

GetTaskCodeOk returns a tuple with the TaskCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskCode

`func (o *HousekeepingCreditRuleTypeFacilityTaskRule) SetTaskCode(v string)`

SetTaskCode sets TaskCode field to given value.

### HasTaskCode

`func (o *HousekeepingCreditRuleTypeFacilityTaskRule) HasTaskCode() bool`

HasTaskCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



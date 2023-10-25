# PostHousekeepingCreditRulesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreditRules** | Pointer to [**[]HousekeepingCreditRuleType**](HousekeepingCreditRuleType.md) | The information of housekeeping credit rule for configuration. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostHousekeepingCreditRulesRequest

`func NewPostHousekeepingCreditRulesRequest() *PostHousekeepingCreditRulesRequest`

NewPostHousekeepingCreditRulesRequest instantiates a new PostHousekeepingCreditRulesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostHousekeepingCreditRulesRequestWithDefaults

`func NewPostHousekeepingCreditRulesRequestWithDefaults() *PostHousekeepingCreditRulesRequest`

NewPostHousekeepingCreditRulesRequestWithDefaults instantiates a new PostHousekeepingCreditRulesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreditRules

`func (o *PostHousekeepingCreditRulesRequest) GetCreditRules() []HousekeepingCreditRuleType`

GetCreditRules returns the CreditRules field if non-nil, zero value otherwise.

### GetCreditRulesOk

`func (o *PostHousekeepingCreditRulesRequest) GetCreditRulesOk() (*[]HousekeepingCreditRuleType, bool)`

GetCreditRulesOk returns a tuple with the CreditRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditRules

`func (o *PostHousekeepingCreditRulesRequest) SetCreditRules(v []HousekeepingCreditRuleType)`

SetCreditRules sets CreditRules field to given value.

### HasCreditRules

`func (o *PostHousekeepingCreditRulesRequest) HasCreditRules() bool`

HasCreditRules returns a boolean if a field has been set.

### GetLinks

`func (o *PostHousekeepingCreditRulesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostHousekeepingCreditRulesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostHousekeepingCreditRulesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostHousekeepingCreditRulesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostHousekeepingCreditRulesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostHousekeepingCreditRulesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostHousekeepingCreditRulesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostHousekeepingCreditRulesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



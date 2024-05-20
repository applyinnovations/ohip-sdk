# CalculatedPointType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BillingGroup** | Pointer to **string** | Indicates the billing group the points belong to. | [optional] 
**CostPerNight** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Points** | Pointer to **float32** | Indicates the total award/tier points generated. | [optional] 
**Rule** | Pointer to **string** | Indicates the validated rules to generate points. | [optional] 
**RuleCode** | Pointer to **string** | Indicates rule code for the rule. | [optional] 
**Type** | Pointer to [**RulePointsTypeType**](RulePointsTypeType.md) |  | [optional] 

## Methods

### NewCalculatedPointType

`func NewCalculatedPointType() *CalculatedPointType`

NewCalculatedPointType instantiates a new CalculatedPointType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCalculatedPointTypeWithDefaults

`func NewCalculatedPointTypeWithDefaults() *CalculatedPointType`

NewCalculatedPointTypeWithDefaults instantiates a new CalculatedPointType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBillingGroup

`func (o *CalculatedPointType) GetBillingGroup() string`

GetBillingGroup returns the BillingGroup field if non-nil, zero value otherwise.

### GetBillingGroupOk

`func (o *CalculatedPointType) GetBillingGroupOk() (*string, bool)`

GetBillingGroupOk returns a tuple with the BillingGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingGroup

`func (o *CalculatedPointType) SetBillingGroup(v string)`

SetBillingGroup sets BillingGroup field to given value.

### HasBillingGroup

`func (o *CalculatedPointType) HasBillingGroup() bool`

HasBillingGroup returns a boolean if a field has been set.

### GetCostPerNight

`func (o *CalculatedPointType) GetCostPerNight() CurrencyAmountType`

GetCostPerNight returns the CostPerNight field if non-nil, zero value otherwise.

### GetCostPerNightOk

`func (o *CalculatedPointType) GetCostPerNightOk() (*CurrencyAmountType, bool)`

GetCostPerNightOk returns a tuple with the CostPerNight field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCostPerNight

`func (o *CalculatedPointType) SetCostPerNight(v CurrencyAmountType)`

SetCostPerNight sets CostPerNight field to given value.

### HasCostPerNight

`func (o *CalculatedPointType) HasCostPerNight() bool`

HasCostPerNight returns a boolean if a field has been set.

### GetPoints

`func (o *CalculatedPointType) GetPoints() float32`

GetPoints returns the Points field if non-nil, zero value otherwise.

### GetPointsOk

`func (o *CalculatedPointType) GetPointsOk() (*float32, bool)`

GetPointsOk returns a tuple with the Points field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPoints

`func (o *CalculatedPointType) SetPoints(v float32)`

SetPoints sets Points field to given value.

### HasPoints

`func (o *CalculatedPointType) HasPoints() bool`

HasPoints returns a boolean if a field has been set.

### GetRule

`func (o *CalculatedPointType) GetRule() string`

GetRule returns the Rule field if non-nil, zero value otherwise.

### GetRuleOk

`func (o *CalculatedPointType) GetRuleOk() (*string, bool)`

GetRuleOk returns a tuple with the Rule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRule

`func (o *CalculatedPointType) SetRule(v string)`

SetRule sets Rule field to given value.

### HasRule

`func (o *CalculatedPointType) HasRule() bool`

HasRule returns a boolean if a field has been set.

### GetRuleCode

`func (o *CalculatedPointType) GetRuleCode() string`

GetRuleCode returns the RuleCode field if non-nil, zero value otherwise.

### GetRuleCodeOk

`func (o *CalculatedPointType) GetRuleCodeOk() (*string, bool)`

GetRuleCodeOk returns a tuple with the RuleCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleCode

`func (o *CalculatedPointType) SetRuleCode(v string)`

SetRuleCode sets RuleCode field to given value.

### HasRuleCode

`func (o *CalculatedPointType) HasRuleCode() bool`

HasRuleCode returns a boolean if a field has been set.

### GetType

`func (o *CalculatedPointType) GetType() RulePointsTypeType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CalculatedPointType) GetTypeOk() (*RulePointsTypeType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CalculatedPointType) SetType(v RulePointsTypeType)`

SetType sets Type field to given value.

### HasType

`func (o *CalculatedPointType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



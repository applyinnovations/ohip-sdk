# ChannelPolicyType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CancelPenalty** | Pointer to [**CancelPenaltyType**](CancelPenaltyType.md) |  | [optional] 
**ChannelMarketingInfo** | Pointer to [**ChannelMarketingInfoType**](ChannelMarketingInfoType.md) |  | [optional] 
**ChannelRatePlanCode** | Pointer to **string** |  | [optional] 
**CommissionCode** | Pointer to **string** |  | [optional] 
**Deposit** | Pointer to **bool** |  | [optional] 
**DepositPolicy** | Pointer to [**DepositPolicyType**](DepositPolicyType.md) |  | [optional] 
**Guarantees** | Pointer to [**GuaranteesInfoType**](GuaranteesInfoType.md) |  | [optional] 
**Hold** | Pointer to **bool** |  | [optional] 
**RatePlanCode** | Pointer to **string** |  | [optional] 

## Methods

### NewChannelPolicyType

`func NewChannelPolicyType() *ChannelPolicyType`

NewChannelPolicyType instantiates a new ChannelPolicyType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelPolicyTypeWithDefaults

`func NewChannelPolicyTypeWithDefaults() *ChannelPolicyType`

NewChannelPolicyTypeWithDefaults instantiates a new ChannelPolicyType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCancelPenalty

`func (o *ChannelPolicyType) GetCancelPenalty() CancelPenaltyType`

GetCancelPenalty returns the CancelPenalty field if non-nil, zero value otherwise.

### GetCancelPenaltyOk

`func (o *ChannelPolicyType) GetCancelPenaltyOk() (*CancelPenaltyType, bool)`

GetCancelPenaltyOk returns a tuple with the CancelPenalty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelPenalty

`func (o *ChannelPolicyType) SetCancelPenalty(v CancelPenaltyType)`

SetCancelPenalty sets CancelPenalty field to given value.

### HasCancelPenalty

`func (o *ChannelPolicyType) HasCancelPenalty() bool`

HasCancelPenalty returns a boolean if a field has been set.

### GetChannelMarketingInfo

`func (o *ChannelPolicyType) GetChannelMarketingInfo() ChannelMarketingInfoType`

GetChannelMarketingInfo returns the ChannelMarketingInfo field if non-nil, zero value otherwise.

### GetChannelMarketingInfoOk

`func (o *ChannelPolicyType) GetChannelMarketingInfoOk() (*ChannelMarketingInfoType, bool)`

GetChannelMarketingInfoOk returns a tuple with the ChannelMarketingInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelMarketingInfo

`func (o *ChannelPolicyType) SetChannelMarketingInfo(v ChannelMarketingInfoType)`

SetChannelMarketingInfo sets ChannelMarketingInfo field to given value.

### HasChannelMarketingInfo

`func (o *ChannelPolicyType) HasChannelMarketingInfo() bool`

HasChannelMarketingInfo returns a boolean if a field has been set.

### GetChannelRatePlanCode

`func (o *ChannelPolicyType) GetChannelRatePlanCode() string`

GetChannelRatePlanCode returns the ChannelRatePlanCode field if non-nil, zero value otherwise.

### GetChannelRatePlanCodeOk

`func (o *ChannelPolicyType) GetChannelRatePlanCodeOk() (*string, bool)`

GetChannelRatePlanCodeOk returns a tuple with the ChannelRatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRatePlanCode

`func (o *ChannelPolicyType) SetChannelRatePlanCode(v string)`

SetChannelRatePlanCode sets ChannelRatePlanCode field to given value.

### HasChannelRatePlanCode

`func (o *ChannelPolicyType) HasChannelRatePlanCode() bool`

HasChannelRatePlanCode returns a boolean if a field has been set.

### GetCommissionCode

`func (o *ChannelPolicyType) GetCommissionCode() string`

GetCommissionCode returns the CommissionCode field if non-nil, zero value otherwise.

### GetCommissionCodeOk

`func (o *ChannelPolicyType) GetCommissionCodeOk() (*string, bool)`

GetCommissionCodeOk returns a tuple with the CommissionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionCode

`func (o *ChannelPolicyType) SetCommissionCode(v string)`

SetCommissionCode sets CommissionCode field to given value.

### HasCommissionCode

`func (o *ChannelPolicyType) HasCommissionCode() bool`

HasCommissionCode returns a boolean if a field has been set.

### GetDeposit

`func (o *ChannelPolicyType) GetDeposit() bool`

GetDeposit returns the Deposit field if non-nil, zero value otherwise.

### GetDepositOk

`func (o *ChannelPolicyType) GetDepositOk() (*bool, bool)`

GetDepositOk returns a tuple with the Deposit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeposit

`func (o *ChannelPolicyType) SetDeposit(v bool)`

SetDeposit sets Deposit field to given value.

### HasDeposit

`func (o *ChannelPolicyType) HasDeposit() bool`

HasDeposit returns a boolean if a field has been set.

### GetDepositPolicy

`func (o *ChannelPolicyType) GetDepositPolicy() DepositPolicyType`

GetDepositPolicy returns the DepositPolicy field if non-nil, zero value otherwise.

### GetDepositPolicyOk

`func (o *ChannelPolicyType) GetDepositPolicyOk() (*DepositPolicyType, bool)`

GetDepositPolicyOk returns a tuple with the DepositPolicy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepositPolicy

`func (o *ChannelPolicyType) SetDepositPolicy(v DepositPolicyType)`

SetDepositPolicy sets DepositPolicy field to given value.

### HasDepositPolicy

`func (o *ChannelPolicyType) HasDepositPolicy() bool`

HasDepositPolicy returns a boolean if a field has been set.

### GetGuarantees

`func (o *ChannelPolicyType) GetGuarantees() GuaranteesInfoType`

GetGuarantees returns the Guarantees field if non-nil, zero value otherwise.

### GetGuaranteesOk

`func (o *ChannelPolicyType) GetGuaranteesOk() (*GuaranteesInfoType, bool)`

GetGuaranteesOk returns a tuple with the Guarantees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuarantees

`func (o *ChannelPolicyType) SetGuarantees(v GuaranteesInfoType)`

SetGuarantees sets Guarantees field to given value.

### HasGuarantees

`func (o *ChannelPolicyType) HasGuarantees() bool`

HasGuarantees returns a boolean if a field has been set.

### GetHold

`func (o *ChannelPolicyType) GetHold() bool`

GetHold returns the Hold field if non-nil, zero value otherwise.

### GetHoldOk

`func (o *ChannelPolicyType) GetHoldOk() (*bool, bool)`

GetHoldOk returns a tuple with the Hold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHold

`func (o *ChannelPolicyType) SetHold(v bool)`

SetHold sets Hold field to given value.

### HasHold

`func (o *ChannelPolicyType) HasHold() bool`

HasHold returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *ChannelPolicyType) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *ChannelPolicyType) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *ChannelPolicyType) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *ChannelPolicyType) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



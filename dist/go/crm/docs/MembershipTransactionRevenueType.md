# MembershipTransactionRevenueType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CentralRevenue** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Date** | Pointer to **string** | Indicates the Date when the revenue was recognized. | [optional] 
**PMSRevenue** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Qualified** | Pointer to **bool** | Indicates if the stay is qualified for points calculation. | [optional] 
**RevenueType** | Pointer to **string** | Indicates the Revenue type associated to Revenue. | [optional] 

## Methods

### NewMembershipTransactionRevenueType

`func NewMembershipTransactionRevenueType() *MembershipTransactionRevenueType`

NewMembershipTransactionRevenueType instantiates a new MembershipTransactionRevenueType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipTransactionRevenueTypeWithDefaults

`func NewMembershipTransactionRevenueTypeWithDefaults() *MembershipTransactionRevenueType`

NewMembershipTransactionRevenueTypeWithDefaults instantiates a new MembershipTransactionRevenueType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCentralRevenue

`func (o *MembershipTransactionRevenueType) GetCentralRevenue() CurrencyAmountType`

GetCentralRevenue returns the CentralRevenue field if non-nil, zero value otherwise.

### GetCentralRevenueOk

`func (o *MembershipTransactionRevenueType) GetCentralRevenueOk() (*CurrencyAmountType, bool)`

GetCentralRevenueOk returns a tuple with the CentralRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCentralRevenue

`func (o *MembershipTransactionRevenueType) SetCentralRevenue(v CurrencyAmountType)`

SetCentralRevenue sets CentralRevenue field to given value.

### HasCentralRevenue

`func (o *MembershipTransactionRevenueType) HasCentralRevenue() bool`

HasCentralRevenue returns a boolean if a field has been set.

### GetDate

`func (o *MembershipTransactionRevenueType) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *MembershipTransactionRevenueType) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *MembershipTransactionRevenueType) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *MembershipTransactionRevenueType) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetPMSRevenue

`func (o *MembershipTransactionRevenueType) GetPMSRevenue() CurrencyAmountType`

GetPMSRevenue returns the PMSRevenue field if non-nil, zero value otherwise.

### GetPMSRevenueOk

`func (o *MembershipTransactionRevenueType) GetPMSRevenueOk() (*CurrencyAmountType, bool)`

GetPMSRevenueOk returns a tuple with the PMSRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPMSRevenue

`func (o *MembershipTransactionRevenueType) SetPMSRevenue(v CurrencyAmountType)`

SetPMSRevenue sets PMSRevenue field to given value.

### HasPMSRevenue

`func (o *MembershipTransactionRevenueType) HasPMSRevenue() bool`

HasPMSRevenue returns a boolean if a field has been set.

### GetQualified

`func (o *MembershipTransactionRevenueType) GetQualified() bool`

GetQualified returns the Qualified field if non-nil, zero value otherwise.

### GetQualifiedOk

`func (o *MembershipTransactionRevenueType) GetQualifiedOk() (*bool, bool)`

GetQualifiedOk returns a tuple with the Qualified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQualified

`func (o *MembershipTransactionRevenueType) SetQualified(v bool)`

SetQualified sets Qualified field to given value.

### HasQualified

`func (o *MembershipTransactionRevenueType) HasQualified() bool`

HasQualified returns a boolean if a field has been set.

### GetRevenueType

`func (o *MembershipTransactionRevenueType) GetRevenueType() string`

GetRevenueType returns the RevenueType field if non-nil, zero value otherwise.

### GetRevenueTypeOk

`func (o *MembershipTransactionRevenueType) GetRevenueTypeOk() (*string, bool)`

GetRevenueTypeOk returns a tuple with the RevenueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueType

`func (o *MembershipTransactionRevenueType) SetRevenueType(v string)`

SetRevenueType sets RevenueType field to given value.

### HasRevenueType

`func (o *MembershipTransactionRevenueType) HasRevenueType() bool`

HasRevenueType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# TrxSetupType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GeneratesType** | Pointer to **string** | Short Summary information of the Chain and it&#39;s Hubs and Hotels. | [optional] 
**TaxInclusive** | Pointer to **bool** | True indicates that the tax is inclusive in the generate. | [optional] 
**Revenue** | Pointer to **bool** | True indicates the Transaction Code is to be considered as revenue to the Hotel. | [optional] 
**ManualPosting** | Pointer to **bool** | True indicates the Transaction Code is allowed to be posted manually. | [optional] 
**UseForPaidout** | Pointer to **bool** | True indicates the Transaction Code is used for Paid outs. | [optional] 
**RedeemMembershipPoints** | Pointer to **bool** | This flag indicates that the transaction is eligible to redeem points (guest can use their points to pay for transactions posted with this transaction code) | [optional] 
**IncludeInDepositRule** | Pointer to **bool** | True indicates the Transaction Code posting will be included in Deposit/Cencallation rule calculations. | [optional] 
**DepositPostingOnly** | Pointer to **bool** | True indicates the Transaction Code is used for deposit postings only. | [optional] 
**PostingRule** | Pointer to **bool** | Deposit posting associated with the transaction code. | [optional] 
**DepositType** | Pointer to [**DepositTypeType**](DepositTypeType.md) |  | [optional] 
**CheckNoRequired** | Pointer to **bool** | True indicates the Transaction Code requires the Check Number for posting. | [optional] 
**InterHotelSales** | Pointer to **bool** | True indicates the Transaction Code is used for cross posting across the hotels/. | [optional] 
**PostCovers** | Pointer to **bool** | True indicates the Transaction Code is used to post covers. | [optional] 
**NonTaxable** | Pointer to **bool** | True indicates the Transaction Code is non taxable. | [optional] 
**Inactive** | Pointer to **bool** | True indicates the Transaction Code is inactive. | [optional] 
**OwnershipStatus** | Pointer to [**TrxOwnershipType**](TrxOwnershipType.md) |  | [optional] 
**ServiceType** | Pointer to **string** | Service Type for the transaction code. | [optional] 
**AccountingCode** | Pointer to **string** | Accounting Code for the transaction code. | [optional] 
**QuantityCode** | Pointer to **string** | Quantity Code for the transaction code. | [optional] 
**EarnMembershipPoints** | Pointer to **bool** | This flag indicates that the transaction is eligible to earn points (guest can earn points on the revenue posted to this transaction code) | [optional] 

## Methods

### NewTrxSetupType

`func NewTrxSetupType() *TrxSetupType`

NewTrxSetupType instantiates a new TrxSetupType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTrxSetupTypeWithDefaults

`func NewTrxSetupTypeWithDefaults() *TrxSetupType`

NewTrxSetupTypeWithDefaults instantiates a new TrxSetupType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGeneratesType

`func (o *TrxSetupType) GetGeneratesType() string`

GetGeneratesType returns the GeneratesType field if non-nil, zero value otherwise.

### GetGeneratesTypeOk

`func (o *TrxSetupType) GetGeneratesTypeOk() (*string, bool)`

GetGeneratesTypeOk returns a tuple with the GeneratesType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneratesType

`func (o *TrxSetupType) SetGeneratesType(v string)`

SetGeneratesType sets GeneratesType field to given value.

### HasGeneratesType

`func (o *TrxSetupType) HasGeneratesType() bool`

HasGeneratesType returns a boolean if a field has been set.

### GetTaxInclusive

`func (o *TrxSetupType) GetTaxInclusive() bool`

GetTaxInclusive returns the TaxInclusive field if non-nil, zero value otherwise.

### GetTaxInclusiveOk

`func (o *TrxSetupType) GetTaxInclusiveOk() (*bool, bool)`

GetTaxInclusiveOk returns a tuple with the TaxInclusive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxInclusive

`func (o *TrxSetupType) SetTaxInclusive(v bool)`

SetTaxInclusive sets TaxInclusive field to given value.

### HasTaxInclusive

`func (o *TrxSetupType) HasTaxInclusive() bool`

HasTaxInclusive returns a boolean if a field has been set.

### GetRevenue

`func (o *TrxSetupType) GetRevenue() bool`

GetRevenue returns the Revenue field if non-nil, zero value otherwise.

### GetRevenueOk

`func (o *TrxSetupType) GetRevenueOk() (*bool, bool)`

GetRevenueOk returns a tuple with the Revenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenue

`func (o *TrxSetupType) SetRevenue(v bool)`

SetRevenue sets Revenue field to given value.

### HasRevenue

`func (o *TrxSetupType) HasRevenue() bool`

HasRevenue returns a boolean if a field has been set.

### GetManualPosting

`func (o *TrxSetupType) GetManualPosting() bool`

GetManualPosting returns the ManualPosting field if non-nil, zero value otherwise.

### GetManualPostingOk

`func (o *TrxSetupType) GetManualPostingOk() (*bool, bool)`

GetManualPostingOk returns a tuple with the ManualPosting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManualPosting

`func (o *TrxSetupType) SetManualPosting(v bool)`

SetManualPosting sets ManualPosting field to given value.

### HasManualPosting

`func (o *TrxSetupType) HasManualPosting() bool`

HasManualPosting returns a boolean if a field has been set.

### GetUseForPaidout

`func (o *TrxSetupType) GetUseForPaidout() bool`

GetUseForPaidout returns the UseForPaidout field if non-nil, zero value otherwise.

### GetUseForPaidoutOk

`func (o *TrxSetupType) GetUseForPaidoutOk() (*bool, bool)`

GetUseForPaidoutOk returns a tuple with the UseForPaidout field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseForPaidout

`func (o *TrxSetupType) SetUseForPaidout(v bool)`

SetUseForPaidout sets UseForPaidout field to given value.

### HasUseForPaidout

`func (o *TrxSetupType) HasUseForPaidout() bool`

HasUseForPaidout returns a boolean if a field has been set.

### GetRedeemMembershipPoints

`func (o *TrxSetupType) GetRedeemMembershipPoints() bool`

GetRedeemMembershipPoints returns the RedeemMembershipPoints field if non-nil, zero value otherwise.

### GetRedeemMembershipPointsOk

`func (o *TrxSetupType) GetRedeemMembershipPointsOk() (*bool, bool)`

GetRedeemMembershipPointsOk returns a tuple with the RedeemMembershipPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedeemMembershipPoints

`func (o *TrxSetupType) SetRedeemMembershipPoints(v bool)`

SetRedeemMembershipPoints sets RedeemMembershipPoints field to given value.

### HasRedeemMembershipPoints

`func (o *TrxSetupType) HasRedeemMembershipPoints() bool`

HasRedeemMembershipPoints returns a boolean if a field has been set.

### GetIncludeInDepositRule

`func (o *TrxSetupType) GetIncludeInDepositRule() bool`

GetIncludeInDepositRule returns the IncludeInDepositRule field if non-nil, zero value otherwise.

### GetIncludeInDepositRuleOk

`func (o *TrxSetupType) GetIncludeInDepositRuleOk() (*bool, bool)`

GetIncludeInDepositRuleOk returns a tuple with the IncludeInDepositRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeInDepositRule

`func (o *TrxSetupType) SetIncludeInDepositRule(v bool)`

SetIncludeInDepositRule sets IncludeInDepositRule field to given value.

### HasIncludeInDepositRule

`func (o *TrxSetupType) HasIncludeInDepositRule() bool`

HasIncludeInDepositRule returns a boolean if a field has been set.

### GetDepositPostingOnly

`func (o *TrxSetupType) GetDepositPostingOnly() bool`

GetDepositPostingOnly returns the DepositPostingOnly field if non-nil, zero value otherwise.

### GetDepositPostingOnlyOk

`func (o *TrxSetupType) GetDepositPostingOnlyOk() (*bool, bool)`

GetDepositPostingOnlyOk returns a tuple with the DepositPostingOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepositPostingOnly

`func (o *TrxSetupType) SetDepositPostingOnly(v bool)`

SetDepositPostingOnly sets DepositPostingOnly field to given value.

### HasDepositPostingOnly

`func (o *TrxSetupType) HasDepositPostingOnly() bool`

HasDepositPostingOnly returns a boolean if a field has been set.

### GetPostingRule

`func (o *TrxSetupType) GetPostingRule() bool`

GetPostingRule returns the PostingRule field if non-nil, zero value otherwise.

### GetPostingRuleOk

`func (o *TrxSetupType) GetPostingRuleOk() (*bool, bool)`

GetPostingRuleOk returns a tuple with the PostingRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingRule

`func (o *TrxSetupType) SetPostingRule(v bool)`

SetPostingRule sets PostingRule field to given value.

### HasPostingRule

`func (o *TrxSetupType) HasPostingRule() bool`

HasPostingRule returns a boolean if a field has been set.

### GetDepositType

`func (o *TrxSetupType) GetDepositType() DepositTypeType`

GetDepositType returns the DepositType field if non-nil, zero value otherwise.

### GetDepositTypeOk

`func (o *TrxSetupType) GetDepositTypeOk() (*DepositTypeType, bool)`

GetDepositTypeOk returns a tuple with the DepositType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepositType

`func (o *TrxSetupType) SetDepositType(v DepositTypeType)`

SetDepositType sets DepositType field to given value.

### HasDepositType

`func (o *TrxSetupType) HasDepositType() bool`

HasDepositType returns a boolean if a field has been set.

### GetCheckNoRequired

`func (o *TrxSetupType) GetCheckNoRequired() bool`

GetCheckNoRequired returns the CheckNoRequired field if non-nil, zero value otherwise.

### GetCheckNoRequiredOk

`func (o *TrxSetupType) GetCheckNoRequiredOk() (*bool, bool)`

GetCheckNoRequiredOk returns a tuple with the CheckNoRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckNoRequired

`func (o *TrxSetupType) SetCheckNoRequired(v bool)`

SetCheckNoRequired sets CheckNoRequired field to given value.

### HasCheckNoRequired

`func (o *TrxSetupType) HasCheckNoRequired() bool`

HasCheckNoRequired returns a boolean if a field has been set.

### GetInterHotelSales

`func (o *TrxSetupType) GetInterHotelSales() bool`

GetInterHotelSales returns the InterHotelSales field if non-nil, zero value otherwise.

### GetInterHotelSalesOk

`func (o *TrxSetupType) GetInterHotelSalesOk() (*bool, bool)`

GetInterHotelSalesOk returns a tuple with the InterHotelSales field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterHotelSales

`func (o *TrxSetupType) SetInterHotelSales(v bool)`

SetInterHotelSales sets InterHotelSales field to given value.

### HasInterHotelSales

`func (o *TrxSetupType) HasInterHotelSales() bool`

HasInterHotelSales returns a boolean if a field has been set.

### GetPostCovers

`func (o *TrxSetupType) GetPostCovers() bool`

GetPostCovers returns the PostCovers field if non-nil, zero value otherwise.

### GetPostCoversOk

`func (o *TrxSetupType) GetPostCoversOk() (*bool, bool)`

GetPostCoversOk returns a tuple with the PostCovers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostCovers

`func (o *TrxSetupType) SetPostCovers(v bool)`

SetPostCovers sets PostCovers field to given value.

### HasPostCovers

`func (o *TrxSetupType) HasPostCovers() bool`

HasPostCovers returns a boolean if a field has been set.

### GetNonTaxable

`func (o *TrxSetupType) GetNonTaxable() bool`

GetNonTaxable returns the NonTaxable field if non-nil, zero value otherwise.

### GetNonTaxableOk

`func (o *TrxSetupType) GetNonTaxableOk() (*bool, bool)`

GetNonTaxableOk returns a tuple with the NonTaxable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonTaxable

`func (o *TrxSetupType) SetNonTaxable(v bool)`

SetNonTaxable sets NonTaxable field to given value.

### HasNonTaxable

`func (o *TrxSetupType) HasNonTaxable() bool`

HasNonTaxable returns a boolean if a field has been set.

### GetInactive

`func (o *TrxSetupType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *TrxSetupType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *TrxSetupType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *TrxSetupType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetOwnershipStatus

`func (o *TrxSetupType) GetOwnershipStatus() TrxOwnershipType`

GetOwnershipStatus returns the OwnershipStatus field if non-nil, zero value otherwise.

### GetOwnershipStatusOk

`func (o *TrxSetupType) GetOwnershipStatusOk() (*TrxOwnershipType, bool)`

GetOwnershipStatusOk returns a tuple with the OwnershipStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnershipStatus

`func (o *TrxSetupType) SetOwnershipStatus(v TrxOwnershipType)`

SetOwnershipStatus sets OwnershipStatus field to given value.

### HasOwnershipStatus

`func (o *TrxSetupType) HasOwnershipStatus() bool`

HasOwnershipStatus returns a boolean if a field has been set.

### GetServiceType

`func (o *TrxSetupType) GetServiceType() string`

GetServiceType returns the ServiceType field if non-nil, zero value otherwise.

### GetServiceTypeOk

`func (o *TrxSetupType) GetServiceTypeOk() (*string, bool)`

GetServiceTypeOk returns a tuple with the ServiceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceType

`func (o *TrxSetupType) SetServiceType(v string)`

SetServiceType sets ServiceType field to given value.

### HasServiceType

`func (o *TrxSetupType) HasServiceType() bool`

HasServiceType returns a boolean if a field has been set.

### GetAccountingCode

`func (o *TrxSetupType) GetAccountingCode() string`

GetAccountingCode returns the AccountingCode field if non-nil, zero value otherwise.

### GetAccountingCodeOk

`func (o *TrxSetupType) GetAccountingCodeOk() (*string, bool)`

GetAccountingCodeOk returns a tuple with the AccountingCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountingCode

`func (o *TrxSetupType) SetAccountingCode(v string)`

SetAccountingCode sets AccountingCode field to given value.

### HasAccountingCode

`func (o *TrxSetupType) HasAccountingCode() bool`

HasAccountingCode returns a boolean if a field has been set.

### GetQuantityCode

`func (o *TrxSetupType) GetQuantityCode() string`

GetQuantityCode returns the QuantityCode field if non-nil, zero value otherwise.

### GetQuantityCodeOk

`func (o *TrxSetupType) GetQuantityCodeOk() (*string, bool)`

GetQuantityCodeOk returns a tuple with the QuantityCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantityCode

`func (o *TrxSetupType) SetQuantityCode(v string)`

SetQuantityCode sets QuantityCode field to given value.

### HasQuantityCode

`func (o *TrxSetupType) HasQuantityCode() bool`

HasQuantityCode returns a boolean if a field has been set.

### GetEarnMembershipPoints

`func (o *TrxSetupType) GetEarnMembershipPoints() bool`

GetEarnMembershipPoints returns the EarnMembershipPoints field if non-nil, zero value otherwise.

### GetEarnMembershipPointsOk

`func (o *TrxSetupType) GetEarnMembershipPointsOk() (*bool, bool)`

GetEarnMembershipPointsOk returns a tuple with the EarnMembershipPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEarnMembershipPoints

`func (o *TrxSetupType) SetEarnMembershipPoints(v bool)`

SetEarnMembershipPoints sets EarnMembershipPoints field to given value.

### HasEarnMembershipPoints

`func (o *TrxSetupType) HasEarnMembershipPoints() bool`

HasEarnMembershipPoints returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



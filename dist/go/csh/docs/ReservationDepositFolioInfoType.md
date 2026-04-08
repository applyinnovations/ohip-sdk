# ReservationDepositFolioInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TotalAmountDue** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**ReservationInfo** | Pointer to [**ReservationInfoType**](ReservationInfoType.md) |  | [optional] 
**Deposits** | Pointer to [**[]DepositPostingType**](DepositPostingType.md) | A List of Deposit Payments. | [optional] 
**TotalAmountTransferrable** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**ProjectedRevenue** | Pointer to [**ProjectedRevenueType**](ProjectedRevenueType.md) |  | [optional] 
**PolicySummaryInfo** | Pointer to [**ReservationPolicySummaryType**](ReservationPolicySummaryType.md) |  | [optional] 
**DepositType** | Pointer to [**DepositType**](DepositType.md) |  | [optional] 
**DepositMaturityType** | Pointer to [**DepositMaturityType**](DepositMaturityType.md) |  | [optional] 
**AdvanceFolioGenerated** | Pointer to **bool** | Flag to indicate if an Advance Folio is already generated. | [optional] 

## Methods

### NewReservationDepositFolioInfoType

`func NewReservationDepositFolioInfoType() *ReservationDepositFolioInfoType`

NewReservationDepositFolioInfoType instantiates a new ReservationDepositFolioInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationDepositFolioInfoTypeWithDefaults

`func NewReservationDepositFolioInfoTypeWithDefaults() *ReservationDepositFolioInfoType`

NewReservationDepositFolioInfoTypeWithDefaults instantiates a new ReservationDepositFolioInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTotalAmountDue

`func (o *ReservationDepositFolioInfoType) GetTotalAmountDue() CurrencyAmountType`

GetTotalAmountDue returns the TotalAmountDue field if non-nil, zero value otherwise.

### GetTotalAmountDueOk

`func (o *ReservationDepositFolioInfoType) GetTotalAmountDueOk() (*CurrencyAmountType, bool)`

GetTotalAmountDueOk returns a tuple with the TotalAmountDue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalAmountDue

`func (o *ReservationDepositFolioInfoType) SetTotalAmountDue(v CurrencyAmountType)`

SetTotalAmountDue sets TotalAmountDue field to given value.

### HasTotalAmountDue

`func (o *ReservationDepositFolioInfoType) HasTotalAmountDue() bool`

HasTotalAmountDue returns a boolean if a field has been set.

### GetReservationInfo

`func (o *ReservationDepositFolioInfoType) GetReservationInfo() ReservationInfoType`

GetReservationInfo returns the ReservationInfo field if non-nil, zero value otherwise.

### GetReservationInfoOk

`func (o *ReservationDepositFolioInfoType) GetReservationInfoOk() (*ReservationInfoType, bool)`

GetReservationInfoOk returns a tuple with the ReservationInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationInfo

`func (o *ReservationDepositFolioInfoType) SetReservationInfo(v ReservationInfoType)`

SetReservationInfo sets ReservationInfo field to given value.

### HasReservationInfo

`func (o *ReservationDepositFolioInfoType) HasReservationInfo() bool`

HasReservationInfo returns a boolean if a field has been set.

### GetDeposits

`func (o *ReservationDepositFolioInfoType) GetDeposits() []DepositPostingType`

GetDeposits returns the Deposits field if non-nil, zero value otherwise.

### GetDepositsOk

`func (o *ReservationDepositFolioInfoType) GetDepositsOk() (*[]DepositPostingType, bool)`

GetDepositsOk returns a tuple with the Deposits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeposits

`func (o *ReservationDepositFolioInfoType) SetDeposits(v []DepositPostingType)`

SetDeposits sets Deposits field to given value.

### HasDeposits

`func (o *ReservationDepositFolioInfoType) HasDeposits() bool`

HasDeposits returns a boolean if a field has been set.

### GetTotalAmountTransferrable

`func (o *ReservationDepositFolioInfoType) GetTotalAmountTransferrable() CurrencyAmountType`

GetTotalAmountTransferrable returns the TotalAmountTransferrable field if non-nil, zero value otherwise.

### GetTotalAmountTransferrableOk

`func (o *ReservationDepositFolioInfoType) GetTotalAmountTransferrableOk() (*CurrencyAmountType, bool)`

GetTotalAmountTransferrableOk returns a tuple with the TotalAmountTransferrable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalAmountTransferrable

`func (o *ReservationDepositFolioInfoType) SetTotalAmountTransferrable(v CurrencyAmountType)`

SetTotalAmountTransferrable sets TotalAmountTransferrable field to given value.

### HasTotalAmountTransferrable

`func (o *ReservationDepositFolioInfoType) HasTotalAmountTransferrable() bool`

HasTotalAmountTransferrable returns a boolean if a field has been set.

### GetProjectedRevenue

`func (o *ReservationDepositFolioInfoType) GetProjectedRevenue() ProjectedRevenueType`

GetProjectedRevenue returns the ProjectedRevenue field if non-nil, zero value otherwise.

### GetProjectedRevenueOk

`func (o *ReservationDepositFolioInfoType) GetProjectedRevenueOk() (*ProjectedRevenueType, bool)`

GetProjectedRevenueOk returns a tuple with the ProjectedRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProjectedRevenue

`func (o *ReservationDepositFolioInfoType) SetProjectedRevenue(v ProjectedRevenueType)`

SetProjectedRevenue sets ProjectedRevenue field to given value.

### HasProjectedRevenue

`func (o *ReservationDepositFolioInfoType) HasProjectedRevenue() bool`

HasProjectedRevenue returns a boolean if a field has been set.

### GetPolicySummaryInfo

`func (o *ReservationDepositFolioInfoType) GetPolicySummaryInfo() ReservationPolicySummaryType`

GetPolicySummaryInfo returns the PolicySummaryInfo field if non-nil, zero value otherwise.

### GetPolicySummaryInfoOk

`func (o *ReservationDepositFolioInfoType) GetPolicySummaryInfoOk() (*ReservationPolicySummaryType, bool)`

GetPolicySummaryInfoOk returns a tuple with the PolicySummaryInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicySummaryInfo

`func (o *ReservationDepositFolioInfoType) SetPolicySummaryInfo(v ReservationPolicySummaryType)`

SetPolicySummaryInfo sets PolicySummaryInfo field to given value.

### HasPolicySummaryInfo

`func (o *ReservationDepositFolioInfoType) HasPolicySummaryInfo() bool`

HasPolicySummaryInfo returns a boolean if a field has been set.

### GetDepositType

`func (o *ReservationDepositFolioInfoType) GetDepositType() DepositType`

GetDepositType returns the DepositType field if non-nil, zero value otherwise.

### GetDepositTypeOk

`func (o *ReservationDepositFolioInfoType) GetDepositTypeOk() (*DepositType, bool)`

GetDepositTypeOk returns a tuple with the DepositType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepositType

`func (o *ReservationDepositFolioInfoType) SetDepositType(v DepositType)`

SetDepositType sets DepositType field to given value.

### HasDepositType

`func (o *ReservationDepositFolioInfoType) HasDepositType() bool`

HasDepositType returns a boolean if a field has been set.

### GetDepositMaturityType

`func (o *ReservationDepositFolioInfoType) GetDepositMaturityType() DepositMaturityType`

GetDepositMaturityType returns the DepositMaturityType field if non-nil, zero value otherwise.

### GetDepositMaturityTypeOk

`func (o *ReservationDepositFolioInfoType) GetDepositMaturityTypeOk() (*DepositMaturityType, bool)`

GetDepositMaturityTypeOk returns a tuple with the DepositMaturityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepositMaturityType

`func (o *ReservationDepositFolioInfoType) SetDepositMaturityType(v DepositMaturityType)`

SetDepositMaturityType sets DepositMaturityType field to given value.

### HasDepositMaturityType

`func (o *ReservationDepositFolioInfoType) HasDepositMaturityType() bool`

HasDepositMaturityType returns a boolean if a field has been set.

### GetAdvanceFolioGenerated

`func (o *ReservationDepositFolioInfoType) GetAdvanceFolioGenerated() bool`

GetAdvanceFolioGenerated returns the AdvanceFolioGenerated field if non-nil, zero value otherwise.

### GetAdvanceFolioGeneratedOk

`func (o *ReservationDepositFolioInfoType) GetAdvanceFolioGeneratedOk() (*bool, bool)`

GetAdvanceFolioGeneratedOk returns a tuple with the AdvanceFolioGenerated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdvanceFolioGenerated

`func (o *ReservationDepositFolioInfoType) SetAdvanceFolioGenerated(v bool)`

SetAdvanceFolioGenerated sets AdvanceFolioGenerated field to given value.

### HasAdvanceFolioGenerated

`func (o *ReservationDepositFolioInfoType) HasAdvanceFolioGenerated() bool`

HasAdvanceFolioGenerated returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



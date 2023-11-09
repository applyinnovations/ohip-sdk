# BalanceInfoCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Balance** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Postings** | Pointer to [**SummaryPostingsType**](SummaryPostingsType.md) |  | [optional] 
**TrxCodesInfo** | Pointer to [**TrxCodesInfoType**](TrxCodesInfoType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewBalanceInfoCriteria

`func NewBalanceInfoCriteria() *BalanceInfoCriteria`

NewBalanceInfoCriteria instantiates a new BalanceInfoCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBalanceInfoCriteriaWithDefaults

`func NewBalanceInfoCriteriaWithDefaults() *BalanceInfoCriteria`

NewBalanceInfoCriteriaWithDefaults instantiates a new BalanceInfoCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBalance

`func (o *BalanceInfoCriteria) GetBalance() CurrencyAmountType`

GetBalance returns the Balance field if non-nil, zero value otherwise.

### GetBalanceOk

`func (o *BalanceInfoCriteria) GetBalanceOk() (*CurrencyAmountType, bool)`

GetBalanceOk returns a tuple with the Balance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalance

`func (o *BalanceInfoCriteria) SetBalance(v CurrencyAmountType)`

SetBalance sets Balance field to given value.

### HasBalance

`func (o *BalanceInfoCriteria) HasBalance() bool`

HasBalance returns a boolean if a field has been set.

### GetLinks

`func (o *BalanceInfoCriteria) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BalanceInfoCriteria) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BalanceInfoCriteria) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BalanceInfoCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPostings

`func (o *BalanceInfoCriteria) GetPostings() SummaryPostingsType`

GetPostings returns the Postings field if non-nil, zero value otherwise.

### GetPostingsOk

`func (o *BalanceInfoCriteria) GetPostingsOk() (*SummaryPostingsType, bool)`

GetPostingsOk returns a tuple with the Postings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostings

`func (o *BalanceInfoCriteria) SetPostings(v SummaryPostingsType)`

SetPostings sets Postings field to given value.

### HasPostings

`func (o *BalanceInfoCriteria) HasPostings() bool`

HasPostings returns a boolean if a field has been set.

### GetTrxCodesInfo

`func (o *BalanceInfoCriteria) GetTrxCodesInfo() TrxCodesInfoType`

GetTrxCodesInfo returns the TrxCodesInfo field if non-nil, zero value otherwise.

### GetTrxCodesInfoOk

`func (o *BalanceInfoCriteria) GetTrxCodesInfoOk() (*TrxCodesInfoType, bool)`

GetTrxCodesInfoOk returns a tuple with the TrxCodesInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrxCodesInfo

`func (o *BalanceInfoCriteria) SetTrxCodesInfo(v TrxCodesInfoType)`

SetTrxCodesInfo sets TrxCodesInfo field to given value.

### HasTrxCodesInfo

`func (o *BalanceInfoCriteria) HasTrxCodesInfo() bool`

HasTrxCodesInfo returns a boolean if a field has been set.

### GetWarnings

`func (o *BalanceInfoCriteria) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BalanceInfoCriteria) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BalanceInfoCriteria) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BalanceInfoCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



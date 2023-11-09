# DepositedPayment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Deposits** | Pointer to [**DepositPostingsType**](DepositPostingsType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**TrxCodesInfo** | Pointer to [**TrxCodesInfoType**](TrxCodesInfoType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewDepositedPayment

`func NewDepositedPayment() *DepositedPayment`

NewDepositedPayment instantiates a new DepositedPayment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDepositedPaymentWithDefaults

`func NewDepositedPaymentWithDefaults() *DepositedPayment`

NewDepositedPaymentWithDefaults instantiates a new DepositedPayment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDeposits

`func (o *DepositedPayment) GetDeposits() DepositPostingsType`

GetDeposits returns the Deposits field if non-nil, zero value otherwise.

### GetDepositsOk

`func (o *DepositedPayment) GetDepositsOk() (*DepositPostingsType, bool)`

GetDepositsOk returns a tuple with the Deposits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeposits

`func (o *DepositedPayment) SetDeposits(v DepositPostingsType)`

SetDeposits sets Deposits field to given value.

### HasDeposits

`func (o *DepositedPayment) HasDeposits() bool`

HasDeposits returns a boolean if a field has been set.

### GetLinks

`func (o *DepositedPayment) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *DepositedPayment) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *DepositedPayment) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *DepositedPayment) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTrxCodesInfo

`func (o *DepositedPayment) GetTrxCodesInfo() TrxCodesInfoType`

GetTrxCodesInfo returns the TrxCodesInfo field if non-nil, zero value otherwise.

### GetTrxCodesInfoOk

`func (o *DepositedPayment) GetTrxCodesInfoOk() (*TrxCodesInfoType, bool)`

GetTrxCodesInfoOk returns a tuple with the TrxCodesInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrxCodesInfo

`func (o *DepositedPayment) SetTrxCodesInfo(v TrxCodesInfoType)`

SetTrxCodesInfo sets TrxCodesInfo field to given value.

### HasTrxCodesInfo

`func (o *DepositedPayment) HasTrxCodesInfo() bool`

HasTrxCodesInfo returns a boolean if a field has been set.

### GetWarnings

`func (o *DepositedPayment) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *DepositedPayment) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *DepositedPayment) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *DepositedPayment) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



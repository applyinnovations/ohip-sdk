# PostAwardTransactionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AwardType** | Pointer to **string** | Type of award that is used to redeem points. | [optional] 
**BillAmount** | Pointer to **float32** | A monetary amount representing the outstanding balance. | [optional] 
**FolioView** | Pointer to **int32** | Folio Window. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**PointsRequired** | Pointer to **float32** | The number of points that are redeemed for this award. | [optional] 
**RedeemAmount** | Pointer to **int32** | The value of amount or points that is being redeemed. | [optional] 
**VoucherNo** | Pointer to **string** | Voucher number of redeemed award. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostAwardTransactionRequest

`func NewPostAwardTransactionRequest() *PostAwardTransactionRequest`

NewPostAwardTransactionRequest instantiates a new PostAwardTransactionRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostAwardTransactionRequestWithDefaults

`func NewPostAwardTransactionRequestWithDefaults() *PostAwardTransactionRequest`

NewPostAwardTransactionRequestWithDefaults instantiates a new PostAwardTransactionRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAwardType

`func (o *PostAwardTransactionRequest) GetAwardType() string`

GetAwardType returns the AwardType field if non-nil, zero value otherwise.

### GetAwardTypeOk

`func (o *PostAwardTransactionRequest) GetAwardTypeOk() (*string, bool)`

GetAwardTypeOk returns a tuple with the AwardType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardType

`func (o *PostAwardTransactionRequest) SetAwardType(v string)`

SetAwardType sets AwardType field to given value.

### HasAwardType

`func (o *PostAwardTransactionRequest) HasAwardType() bool`

HasAwardType returns a boolean if a field has been set.

### GetBillAmount

`func (o *PostAwardTransactionRequest) GetBillAmount() float32`

GetBillAmount returns the BillAmount field if non-nil, zero value otherwise.

### GetBillAmountOk

`func (o *PostAwardTransactionRequest) GetBillAmountOk() (*float32, bool)`

GetBillAmountOk returns a tuple with the BillAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillAmount

`func (o *PostAwardTransactionRequest) SetBillAmount(v float32)`

SetBillAmount sets BillAmount field to given value.

### HasBillAmount

`func (o *PostAwardTransactionRequest) HasBillAmount() bool`

HasBillAmount returns a boolean if a field has been set.

### GetFolioView

`func (o *PostAwardTransactionRequest) GetFolioView() int32`

GetFolioView returns the FolioView field if non-nil, zero value otherwise.

### GetFolioViewOk

`func (o *PostAwardTransactionRequest) GetFolioViewOk() (*int32, bool)`

GetFolioViewOk returns a tuple with the FolioView field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioView

`func (o *PostAwardTransactionRequest) SetFolioView(v int32)`

SetFolioView sets FolioView field to given value.

### HasFolioView

`func (o *PostAwardTransactionRequest) HasFolioView() bool`

HasFolioView returns a boolean if a field has been set.

### GetLinks

`func (o *PostAwardTransactionRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostAwardTransactionRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostAwardTransactionRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostAwardTransactionRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPointsRequired

`func (o *PostAwardTransactionRequest) GetPointsRequired() float32`

GetPointsRequired returns the PointsRequired field if non-nil, zero value otherwise.

### GetPointsRequiredOk

`func (o *PostAwardTransactionRequest) GetPointsRequiredOk() (*float32, bool)`

GetPointsRequiredOk returns a tuple with the PointsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointsRequired

`func (o *PostAwardTransactionRequest) SetPointsRequired(v float32)`

SetPointsRequired sets PointsRequired field to given value.

### HasPointsRequired

`func (o *PostAwardTransactionRequest) HasPointsRequired() bool`

HasPointsRequired returns a boolean if a field has been set.

### GetRedeemAmount

`func (o *PostAwardTransactionRequest) GetRedeemAmount() int32`

GetRedeemAmount returns the RedeemAmount field if non-nil, zero value otherwise.

### GetRedeemAmountOk

`func (o *PostAwardTransactionRequest) GetRedeemAmountOk() (*int32, bool)`

GetRedeemAmountOk returns a tuple with the RedeemAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedeemAmount

`func (o *PostAwardTransactionRequest) SetRedeemAmount(v int32)`

SetRedeemAmount sets RedeemAmount field to given value.

### HasRedeemAmount

`func (o *PostAwardTransactionRequest) HasRedeemAmount() bool`

HasRedeemAmount returns a boolean if a field has been set.

### GetVoucherNo

`func (o *PostAwardTransactionRequest) GetVoucherNo() string`

GetVoucherNo returns the VoucherNo field if non-nil, zero value otherwise.

### GetVoucherNoOk

`func (o *PostAwardTransactionRequest) GetVoucherNoOk() (*string, bool)`

GetVoucherNoOk returns a tuple with the VoucherNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVoucherNo

`func (o *PostAwardTransactionRequest) SetVoucherNo(v string)`

SetVoucherNo sets VoucherNo field to given value.

### HasVoucherNo

`func (o *PostAwardTransactionRequest) HasVoucherNo() bool`

HasVoucherNo returns a boolean if a field has been set.

### GetWarnings

`func (o *PostAwardTransactionRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostAwardTransactionRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostAwardTransactionRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostAwardTransactionRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



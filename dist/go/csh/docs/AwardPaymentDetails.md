# AwardPaymentDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AwardType** | Pointer to **string** | Type of award that is used to redeem points. | [optional] 
**VoucherNo** | Pointer to **string** | Voucher number of redeemed award. | [optional] 
**RedeemAmount** | Pointer to **int32** | The value of amount or points that is being redeemed. | [optional] 
**PointsRequired** | Pointer to **float32** | The number of points that are redeemed for this award. | [optional] 
**FolioView** | Pointer to **int32** | Folio Window. | [optional] 
**BillAmount** | Pointer to **float32** | A monetary amount representing the outstanding balance. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAwardPaymentDetails

`func NewAwardPaymentDetails() *AwardPaymentDetails`

NewAwardPaymentDetails instantiates a new AwardPaymentDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAwardPaymentDetailsWithDefaults

`func NewAwardPaymentDetailsWithDefaults() *AwardPaymentDetails`

NewAwardPaymentDetailsWithDefaults instantiates a new AwardPaymentDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAwardType

`func (o *AwardPaymentDetails) GetAwardType() string`

GetAwardType returns the AwardType field if non-nil, zero value otherwise.

### GetAwardTypeOk

`func (o *AwardPaymentDetails) GetAwardTypeOk() (*string, bool)`

GetAwardTypeOk returns a tuple with the AwardType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardType

`func (o *AwardPaymentDetails) SetAwardType(v string)`

SetAwardType sets AwardType field to given value.

### HasAwardType

`func (o *AwardPaymentDetails) HasAwardType() bool`

HasAwardType returns a boolean if a field has been set.

### GetVoucherNo

`func (o *AwardPaymentDetails) GetVoucherNo() string`

GetVoucherNo returns the VoucherNo field if non-nil, zero value otherwise.

### GetVoucherNoOk

`func (o *AwardPaymentDetails) GetVoucherNoOk() (*string, bool)`

GetVoucherNoOk returns a tuple with the VoucherNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVoucherNo

`func (o *AwardPaymentDetails) SetVoucherNo(v string)`

SetVoucherNo sets VoucherNo field to given value.

### HasVoucherNo

`func (o *AwardPaymentDetails) HasVoucherNo() bool`

HasVoucherNo returns a boolean if a field has been set.

### GetRedeemAmount

`func (o *AwardPaymentDetails) GetRedeemAmount() int32`

GetRedeemAmount returns the RedeemAmount field if non-nil, zero value otherwise.

### GetRedeemAmountOk

`func (o *AwardPaymentDetails) GetRedeemAmountOk() (*int32, bool)`

GetRedeemAmountOk returns a tuple with the RedeemAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedeemAmount

`func (o *AwardPaymentDetails) SetRedeemAmount(v int32)`

SetRedeemAmount sets RedeemAmount field to given value.

### HasRedeemAmount

`func (o *AwardPaymentDetails) HasRedeemAmount() bool`

HasRedeemAmount returns a boolean if a field has been set.

### GetPointsRequired

`func (o *AwardPaymentDetails) GetPointsRequired() float32`

GetPointsRequired returns the PointsRequired field if non-nil, zero value otherwise.

### GetPointsRequiredOk

`func (o *AwardPaymentDetails) GetPointsRequiredOk() (*float32, bool)`

GetPointsRequiredOk returns a tuple with the PointsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointsRequired

`func (o *AwardPaymentDetails) SetPointsRequired(v float32)`

SetPointsRequired sets PointsRequired field to given value.

### HasPointsRequired

`func (o *AwardPaymentDetails) HasPointsRequired() bool`

HasPointsRequired returns a boolean if a field has been set.

### GetFolioView

`func (o *AwardPaymentDetails) GetFolioView() int32`

GetFolioView returns the FolioView field if non-nil, zero value otherwise.

### GetFolioViewOk

`func (o *AwardPaymentDetails) GetFolioViewOk() (*int32, bool)`

GetFolioViewOk returns a tuple with the FolioView field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioView

`func (o *AwardPaymentDetails) SetFolioView(v int32)`

SetFolioView sets FolioView field to given value.

### HasFolioView

`func (o *AwardPaymentDetails) HasFolioView() bool`

HasFolioView returns a boolean if a field has been set.

### GetBillAmount

`func (o *AwardPaymentDetails) GetBillAmount() float32`

GetBillAmount returns the BillAmount field if non-nil, zero value otherwise.

### GetBillAmountOk

`func (o *AwardPaymentDetails) GetBillAmountOk() (*float32, bool)`

GetBillAmountOk returns a tuple with the BillAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillAmount

`func (o *AwardPaymentDetails) SetBillAmount(v float32)`

SetBillAmount sets BillAmount field to given value.

### HasBillAmount

`func (o *AwardPaymentDetails) HasBillAmount() bool`

HasBillAmount returns a boolean if a field has been set.

### GetLinks

`func (o *AwardPaymentDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AwardPaymentDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AwardPaymentDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AwardPaymentDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AwardPaymentDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AwardPaymentDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AwardPaymentDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AwardPaymentDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



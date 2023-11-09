# PostedCreditBill

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FolioWindow** | Pointer to [**[]FolioWindowType**](FolioWindowType.md) | Information regarding the new Credit Folio created. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Payments** | Pointer to [**DetailPostingsType**](DetailPostingsType.md) |  | [optional] 
**TrxCodesInfo** | Pointer to [**TrxCodesInfoType**](TrxCodesInfoType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostedCreditBill

`func NewPostedCreditBill() *PostedCreditBill`

NewPostedCreditBill instantiates a new PostedCreditBill object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostedCreditBillWithDefaults

`func NewPostedCreditBillWithDefaults() *PostedCreditBill`

NewPostedCreditBillWithDefaults instantiates a new PostedCreditBill object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFolioWindow

`func (o *PostedCreditBill) GetFolioWindow() []FolioWindowType`

GetFolioWindow returns the FolioWindow field if non-nil, zero value otherwise.

### GetFolioWindowOk

`func (o *PostedCreditBill) GetFolioWindowOk() (*[]FolioWindowType, bool)`

GetFolioWindowOk returns a tuple with the FolioWindow field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioWindow

`func (o *PostedCreditBill) SetFolioWindow(v []FolioWindowType)`

SetFolioWindow sets FolioWindow field to given value.

### HasFolioWindow

`func (o *PostedCreditBill) HasFolioWindow() bool`

HasFolioWindow returns a boolean if a field has been set.

### GetLinks

`func (o *PostedCreditBill) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostedCreditBill) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostedCreditBill) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostedCreditBill) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPayments

`func (o *PostedCreditBill) GetPayments() DetailPostingsType`

GetPayments returns the Payments field if non-nil, zero value otherwise.

### GetPaymentsOk

`func (o *PostedCreditBill) GetPaymentsOk() (*DetailPostingsType, bool)`

GetPaymentsOk returns a tuple with the Payments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayments

`func (o *PostedCreditBill) SetPayments(v DetailPostingsType)`

SetPayments sets Payments field to given value.

### HasPayments

`func (o *PostedCreditBill) HasPayments() bool`

HasPayments returns a boolean if a field has been set.

### GetTrxCodesInfo

`func (o *PostedCreditBill) GetTrxCodesInfo() TrxCodesInfoType`

GetTrxCodesInfo returns the TrxCodesInfo field if non-nil, zero value otherwise.

### GetTrxCodesInfoOk

`func (o *PostedCreditBill) GetTrxCodesInfoOk() (*TrxCodesInfoType, bool)`

GetTrxCodesInfoOk returns a tuple with the TrxCodesInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrxCodesInfo

`func (o *PostedCreditBill) SetTrxCodesInfo(v TrxCodesInfoType)`

SetTrxCodesInfo sets TrxCodesInfo field to given value.

### HasTrxCodesInfo

`func (o *PostedCreditBill) HasTrxCodesInfo() bool`

HasTrxCodesInfo returns a boolean if a field has been set.

### GetWarnings

`func (o *PostedCreditBill) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostedCreditBill) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostedCreditBill) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostedCreditBill) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



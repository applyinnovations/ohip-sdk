# PostSupplementalFolioStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FolioWindow** | Pointer to [**[]FolioWindowType**](FolioWindowType.md) | Information regarding the new Supplemental Folio created. | [optional] 
**Payments** | Pointer to [**[]DetailPostingType**](DetailPostingType.md) | Details of the transaction(Posting). | [optional] 
**TrxCodesInfo** | Pointer to [**[]TrxInfoType**](TrxInfoType.md) | List of Transaction codes info. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostSupplementalFolioStatus

`func NewPostSupplementalFolioStatus() *PostSupplementalFolioStatus`

NewPostSupplementalFolioStatus instantiates a new PostSupplementalFolioStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostSupplementalFolioStatusWithDefaults

`func NewPostSupplementalFolioStatusWithDefaults() *PostSupplementalFolioStatus`

NewPostSupplementalFolioStatusWithDefaults instantiates a new PostSupplementalFolioStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFolioWindow

`func (o *PostSupplementalFolioStatus) GetFolioWindow() []FolioWindowType`

GetFolioWindow returns the FolioWindow field if non-nil, zero value otherwise.

### GetFolioWindowOk

`func (o *PostSupplementalFolioStatus) GetFolioWindowOk() (*[]FolioWindowType, bool)`

GetFolioWindowOk returns a tuple with the FolioWindow field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioWindow

`func (o *PostSupplementalFolioStatus) SetFolioWindow(v []FolioWindowType)`

SetFolioWindow sets FolioWindow field to given value.

### HasFolioWindow

`func (o *PostSupplementalFolioStatus) HasFolioWindow() bool`

HasFolioWindow returns a boolean if a field has been set.

### GetPayments

`func (o *PostSupplementalFolioStatus) GetPayments() []DetailPostingType`

GetPayments returns the Payments field if non-nil, zero value otherwise.

### GetPaymentsOk

`func (o *PostSupplementalFolioStatus) GetPaymentsOk() (*[]DetailPostingType, bool)`

GetPaymentsOk returns a tuple with the Payments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayments

`func (o *PostSupplementalFolioStatus) SetPayments(v []DetailPostingType)`

SetPayments sets Payments field to given value.

### HasPayments

`func (o *PostSupplementalFolioStatus) HasPayments() bool`

HasPayments returns a boolean if a field has been set.

### GetTrxCodesInfo

`func (o *PostSupplementalFolioStatus) GetTrxCodesInfo() []TrxInfoType`

GetTrxCodesInfo returns the TrxCodesInfo field if non-nil, zero value otherwise.

### GetTrxCodesInfoOk

`func (o *PostSupplementalFolioStatus) GetTrxCodesInfoOk() (*[]TrxInfoType, bool)`

GetTrxCodesInfoOk returns a tuple with the TrxCodesInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrxCodesInfo

`func (o *PostSupplementalFolioStatus) SetTrxCodesInfo(v []TrxInfoType)`

SetTrxCodesInfo sets TrxCodesInfo field to given value.

### HasTrxCodesInfo

`func (o *PostSupplementalFolioStatus) HasTrxCodesInfo() bool`

HasTrxCodesInfo returns a boolean if a field has been set.

### GetLinks

`func (o *PostSupplementalFolioStatus) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostSupplementalFolioStatus) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostSupplementalFolioStatus) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostSupplementalFolioStatus) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostSupplementalFolioStatus) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostSupplementalFolioStatus) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostSupplementalFolioStatus) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostSupplementalFolioStatus) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



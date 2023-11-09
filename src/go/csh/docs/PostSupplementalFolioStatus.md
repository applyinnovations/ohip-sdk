# PostSupplementalFolioStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FolioWindow** | Pointer to [**[]FolioWindowType**](FolioWindowType.md) | Information regarding the new Supplemental Folio created. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Payments** | Pointer to [**DetailPostingsType**](DetailPostingsType.md) |  | [optional] 
**TrxCodesInfo** | Pointer to [**TrxCodesInfoType**](TrxCodesInfoType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

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

### GetLinks

`func (o *PostSupplementalFolioStatus) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostSupplementalFolioStatus) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostSupplementalFolioStatus) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostSupplementalFolioStatus) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPayments

`func (o *PostSupplementalFolioStatus) GetPayments() DetailPostingsType`

GetPayments returns the Payments field if non-nil, zero value otherwise.

### GetPaymentsOk

`func (o *PostSupplementalFolioStatus) GetPaymentsOk() (*DetailPostingsType, bool)`

GetPaymentsOk returns a tuple with the Payments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayments

`func (o *PostSupplementalFolioStatus) SetPayments(v DetailPostingsType)`

SetPayments sets Payments field to given value.

### HasPayments

`func (o *PostSupplementalFolioStatus) HasPayments() bool`

HasPayments returns a boolean if a field has been set.

### GetTrxCodesInfo

`func (o *PostSupplementalFolioStatus) GetTrxCodesInfo() TrxCodesInfoType`

GetTrxCodesInfo returns the TrxCodesInfo field if non-nil, zero value otherwise.

### GetTrxCodesInfoOk

`func (o *PostSupplementalFolioStatus) GetTrxCodesInfoOk() (*TrxCodesInfoType, bool)`

GetTrxCodesInfoOk returns a tuple with the TrxCodesInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrxCodesInfo

`func (o *PostSupplementalFolioStatus) SetTrxCodesInfo(v TrxCodesInfoType)`

SetTrxCodesInfo sets TrxCodesInfo field to given value.

### HasTrxCodesInfo

`func (o *PostSupplementalFolioStatus) HasTrxCodesInfo() bool`

HasTrxCodesInfo returns a boolean if a field has been set.

### GetWarnings

`func (o *PostSupplementalFolioStatus) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostSupplementalFolioStatus) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostSupplementalFolioStatus) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostSupplementalFolioStatus) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



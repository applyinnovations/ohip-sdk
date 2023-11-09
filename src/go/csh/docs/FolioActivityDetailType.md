# FolioActivityDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BillGenerationDate** | Pointer to **string** | Bill Generation Date. | [optional] 
**BillNo** | Pointer to **string** | Bill Number. | [optional] 
**FiscalBillNo** | Pointer to **string** | Fiscal Bill Number returned from Fiscal Program. | [optional] 
**FolioType** | Pointer to **string** | Folio Type. | [optional] 
**MessageText** | Pointer to **string** | Return Message from Fiscal Printing Program. | [optional] 
**PartnerFiscalFolioStatus** | Pointer to **string** | Fiscal folio status for the partner system. | [optional] 
**QueueName** | Pointer to **string** | Queue Name. | [optional] 
**ResponseAttemptNo** | Pointer to **int32** | Number of fiscal response attempts made for the folio | [optional] 
**Status** | Pointer to **string** | Return Status from Fiscal Program Application (Fiscal Printer). | [optional] 

## Methods

### NewFolioActivityDetailType

`func NewFolioActivityDetailType() *FolioActivityDetailType`

NewFolioActivityDetailType instantiates a new FolioActivityDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFolioActivityDetailTypeWithDefaults

`func NewFolioActivityDetailTypeWithDefaults() *FolioActivityDetailType`

NewFolioActivityDetailTypeWithDefaults instantiates a new FolioActivityDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBillGenerationDate

`func (o *FolioActivityDetailType) GetBillGenerationDate() string`

GetBillGenerationDate returns the BillGenerationDate field if non-nil, zero value otherwise.

### GetBillGenerationDateOk

`func (o *FolioActivityDetailType) GetBillGenerationDateOk() (*string, bool)`

GetBillGenerationDateOk returns a tuple with the BillGenerationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillGenerationDate

`func (o *FolioActivityDetailType) SetBillGenerationDate(v string)`

SetBillGenerationDate sets BillGenerationDate field to given value.

### HasBillGenerationDate

`func (o *FolioActivityDetailType) HasBillGenerationDate() bool`

HasBillGenerationDate returns a boolean if a field has been set.

### GetBillNo

`func (o *FolioActivityDetailType) GetBillNo() string`

GetBillNo returns the BillNo field if non-nil, zero value otherwise.

### GetBillNoOk

`func (o *FolioActivityDetailType) GetBillNoOk() (*string, bool)`

GetBillNoOk returns a tuple with the BillNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillNo

`func (o *FolioActivityDetailType) SetBillNo(v string)`

SetBillNo sets BillNo field to given value.

### HasBillNo

`func (o *FolioActivityDetailType) HasBillNo() bool`

HasBillNo returns a boolean if a field has been set.

### GetFiscalBillNo

`func (o *FolioActivityDetailType) GetFiscalBillNo() string`

GetFiscalBillNo returns the FiscalBillNo field if non-nil, zero value otherwise.

### GetFiscalBillNoOk

`func (o *FolioActivityDetailType) GetFiscalBillNoOk() (*string, bool)`

GetFiscalBillNoOk returns a tuple with the FiscalBillNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalBillNo

`func (o *FolioActivityDetailType) SetFiscalBillNo(v string)`

SetFiscalBillNo sets FiscalBillNo field to given value.

### HasFiscalBillNo

`func (o *FolioActivityDetailType) HasFiscalBillNo() bool`

HasFiscalBillNo returns a boolean if a field has been set.

### GetFolioType

`func (o *FolioActivityDetailType) GetFolioType() string`

GetFolioType returns the FolioType field if non-nil, zero value otherwise.

### GetFolioTypeOk

`func (o *FolioActivityDetailType) GetFolioTypeOk() (*string, bool)`

GetFolioTypeOk returns a tuple with the FolioType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioType

`func (o *FolioActivityDetailType) SetFolioType(v string)`

SetFolioType sets FolioType field to given value.

### HasFolioType

`func (o *FolioActivityDetailType) HasFolioType() bool`

HasFolioType returns a boolean if a field has been set.

### GetMessageText

`func (o *FolioActivityDetailType) GetMessageText() string`

GetMessageText returns the MessageText field if non-nil, zero value otherwise.

### GetMessageTextOk

`func (o *FolioActivityDetailType) GetMessageTextOk() (*string, bool)`

GetMessageTextOk returns a tuple with the MessageText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageText

`func (o *FolioActivityDetailType) SetMessageText(v string)`

SetMessageText sets MessageText field to given value.

### HasMessageText

`func (o *FolioActivityDetailType) HasMessageText() bool`

HasMessageText returns a boolean if a field has been set.

### GetPartnerFiscalFolioStatus

`func (o *FolioActivityDetailType) GetPartnerFiscalFolioStatus() string`

GetPartnerFiscalFolioStatus returns the PartnerFiscalFolioStatus field if non-nil, zero value otherwise.

### GetPartnerFiscalFolioStatusOk

`func (o *FolioActivityDetailType) GetPartnerFiscalFolioStatusOk() (*string, bool)`

GetPartnerFiscalFolioStatusOk returns a tuple with the PartnerFiscalFolioStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPartnerFiscalFolioStatus

`func (o *FolioActivityDetailType) SetPartnerFiscalFolioStatus(v string)`

SetPartnerFiscalFolioStatus sets PartnerFiscalFolioStatus field to given value.

### HasPartnerFiscalFolioStatus

`func (o *FolioActivityDetailType) HasPartnerFiscalFolioStatus() bool`

HasPartnerFiscalFolioStatus returns a boolean if a field has been set.

### GetQueueName

`func (o *FolioActivityDetailType) GetQueueName() string`

GetQueueName returns the QueueName field if non-nil, zero value otherwise.

### GetQueueNameOk

`func (o *FolioActivityDetailType) GetQueueNameOk() (*string, bool)`

GetQueueNameOk returns a tuple with the QueueName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueueName

`func (o *FolioActivityDetailType) SetQueueName(v string)`

SetQueueName sets QueueName field to given value.

### HasQueueName

`func (o *FolioActivityDetailType) HasQueueName() bool`

HasQueueName returns a boolean if a field has been set.

### GetResponseAttemptNo

`func (o *FolioActivityDetailType) GetResponseAttemptNo() int32`

GetResponseAttemptNo returns the ResponseAttemptNo field if non-nil, zero value otherwise.

### GetResponseAttemptNoOk

`func (o *FolioActivityDetailType) GetResponseAttemptNoOk() (*int32, bool)`

GetResponseAttemptNoOk returns a tuple with the ResponseAttemptNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponseAttemptNo

`func (o *FolioActivityDetailType) SetResponseAttemptNo(v int32)`

SetResponseAttemptNo sets ResponseAttemptNo field to given value.

### HasResponseAttemptNo

`func (o *FolioActivityDetailType) HasResponseAttemptNo() bool`

HasResponseAttemptNo returns a boolean if a field has been set.

### GetStatus

`func (o *FolioActivityDetailType) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *FolioActivityDetailType) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *FolioActivityDetailType) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *FolioActivityDetailType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



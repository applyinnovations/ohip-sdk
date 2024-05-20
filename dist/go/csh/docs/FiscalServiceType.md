# FiscalServiceType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FiscalTerminal** | Pointer to **string** | Applicable for Fiscal Terminal. The ID of the terminal where the fiscal device is connected. | [optional] 
**FolioQueueName** | Pointer to [**FolioQueueType**](FolioQueueType.md) |  | [optional] 
**FolioSeqId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Instructions** | Pointer to [**FiscalFolioInstruction**](FiscalFolioInstruction.md) |  | [optional] 
**InvoiceCurrencyCode** | Pointer to **string** | Fiscal Invoicing Currency code to be used by the Fiscal Service. | [optional] 

## Methods

### NewFiscalServiceType

`func NewFiscalServiceType() *FiscalServiceType`

NewFiscalServiceType instantiates a new FiscalServiceType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFiscalServiceTypeWithDefaults

`func NewFiscalServiceTypeWithDefaults() *FiscalServiceType`

NewFiscalServiceTypeWithDefaults instantiates a new FiscalServiceType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFiscalTerminal

`func (o *FiscalServiceType) GetFiscalTerminal() string`

GetFiscalTerminal returns the FiscalTerminal field if non-nil, zero value otherwise.

### GetFiscalTerminalOk

`func (o *FiscalServiceType) GetFiscalTerminalOk() (*string, bool)`

GetFiscalTerminalOk returns a tuple with the FiscalTerminal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalTerminal

`func (o *FiscalServiceType) SetFiscalTerminal(v string)`

SetFiscalTerminal sets FiscalTerminal field to given value.

### HasFiscalTerminal

`func (o *FiscalServiceType) HasFiscalTerminal() bool`

HasFiscalTerminal returns a boolean if a field has been set.

### GetFolioQueueName

`func (o *FiscalServiceType) GetFolioQueueName() FolioQueueType`

GetFolioQueueName returns the FolioQueueName field if non-nil, zero value otherwise.

### GetFolioQueueNameOk

`func (o *FiscalServiceType) GetFolioQueueNameOk() (*FolioQueueType, bool)`

GetFolioQueueNameOk returns a tuple with the FolioQueueName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioQueueName

`func (o *FiscalServiceType) SetFolioQueueName(v FolioQueueType)`

SetFolioQueueName sets FolioQueueName field to given value.

### HasFolioQueueName

`func (o *FiscalServiceType) HasFolioQueueName() bool`

HasFolioQueueName returns a boolean if a field has been set.

### GetFolioSeqId

`func (o *FiscalServiceType) GetFolioSeqId() UniqueIDType`

GetFolioSeqId returns the FolioSeqId field if non-nil, zero value otherwise.

### GetFolioSeqIdOk

`func (o *FiscalServiceType) GetFolioSeqIdOk() (*UniqueIDType, bool)`

GetFolioSeqIdOk returns a tuple with the FolioSeqId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioSeqId

`func (o *FiscalServiceType) SetFolioSeqId(v UniqueIDType)`

SetFolioSeqId sets FolioSeqId field to given value.

### HasFolioSeqId

`func (o *FiscalServiceType) HasFolioSeqId() bool`

HasFolioSeqId returns a boolean if a field has been set.

### GetInstructions

`func (o *FiscalServiceType) GetInstructions() FiscalFolioInstruction`

GetInstructions returns the Instructions field if non-nil, zero value otherwise.

### GetInstructionsOk

`func (o *FiscalServiceType) GetInstructionsOk() (*FiscalFolioInstruction, bool)`

GetInstructionsOk returns a tuple with the Instructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructions

`func (o *FiscalServiceType) SetInstructions(v FiscalFolioInstruction)`

SetInstructions sets Instructions field to given value.

### HasInstructions

`func (o *FiscalServiceType) HasInstructions() bool`

HasInstructions returns a boolean if a field has been set.

### GetInvoiceCurrencyCode

`func (o *FiscalServiceType) GetInvoiceCurrencyCode() string`

GetInvoiceCurrencyCode returns the InvoiceCurrencyCode field if non-nil, zero value otherwise.

### GetInvoiceCurrencyCodeOk

`func (o *FiscalServiceType) GetInvoiceCurrencyCodeOk() (*string, bool)`

GetInvoiceCurrencyCodeOk returns a tuple with the InvoiceCurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceCurrencyCode

`func (o *FiscalServiceType) SetInvoiceCurrencyCode(v string)`

SetInvoiceCurrencyCode sets InvoiceCurrencyCode field to given value.

### HasInvoiceCurrencyCode

`func (o *FiscalServiceType) HasInvoiceCurrencyCode() bool`

HasInvoiceCurrencyCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



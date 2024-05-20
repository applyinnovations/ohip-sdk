# FolioQueueType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FolioType** | Pointer to **string** | Folio Type to be assigned to generated folio. This is a country requirement. | [optional] 
**GenerateFiscalFolio** | Pointer to **bool** | Fiscal folio flag to call fiscal folio web service after folio generation. | [optional] 
**QueueName** | Pointer to **string** | Folio Queue name. | [optional] 

## Methods

### NewFolioQueueType

`func NewFolioQueueType() *FolioQueueType`

NewFolioQueueType instantiates a new FolioQueueType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFolioQueueTypeWithDefaults

`func NewFolioQueueTypeWithDefaults() *FolioQueueType`

NewFolioQueueTypeWithDefaults instantiates a new FolioQueueType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFolioType

`func (o *FolioQueueType) GetFolioType() string`

GetFolioType returns the FolioType field if non-nil, zero value otherwise.

### GetFolioTypeOk

`func (o *FolioQueueType) GetFolioTypeOk() (*string, bool)`

GetFolioTypeOk returns a tuple with the FolioType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioType

`func (o *FolioQueueType) SetFolioType(v string)`

SetFolioType sets FolioType field to given value.

### HasFolioType

`func (o *FolioQueueType) HasFolioType() bool`

HasFolioType returns a boolean if a field has been set.

### GetGenerateFiscalFolio

`func (o *FolioQueueType) GetGenerateFiscalFolio() bool`

GetGenerateFiscalFolio returns the GenerateFiscalFolio field if non-nil, zero value otherwise.

### GetGenerateFiscalFolioOk

`func (o *FolioQueueType) GetGenerateFiscalFolioOk() (*bool, bool)`

GetGenerateFiscalFolioOk returns a tuple with the GenerateFiscalFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenerateFiscalFolio

`func (o *FolioQueueType) SetGenerateFiscalFolio(v bool)`

SetGenerateFiscalFolio sets GenerateFiscalFolio field to given value.

### HasGenerateFiscalFolio

`func (o *FolioQueueType) HasGenerateFiscalFolio() bool`

HasGenerateFiscalFolio returns a boolean if a field has been set.

### GetQueueName

`func (o *FolioQueueType) GetQueueName() string`

GetQueueName returns the QueueName field if non-nil, zero value otherwise.

### GetQueueNameOk

`func (o *FolioQueueType) GetQueueNameOk() (*string, bool)`

GetQueueNameOk returns a tuple with the QueueName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueueName

`func (o *FolioQueueType) SetQueueName(v string)`

SetQueueName sets QueueName field to given value.

### HasQueueName

`func (o *FolioQueueType) HasQueueName() bool`

HasQueueName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



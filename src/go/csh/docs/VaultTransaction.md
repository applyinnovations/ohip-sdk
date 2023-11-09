# VaultTransaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HttpTransactionMessage** | Pointer to [**VaultHTTPTransactionMessageType**](VaultHTTPTransactionMessageType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewVaultTransaction

`func NewVaultTransaction() *VaultTransaction`

NewVaultTransaction instantiates a new VaultTransaction object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVaultTransactionWithDefaults

`func NewVaultTransactionWithDefaults() *VaultTransaction`

NewVaultTransactionWithDefaults instantiates a new VaultTransaction object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHttpTransactionMessage

`func (o *VaultTransaction) GetHttpTransactionMessage() VaultHTTPTransactionMessageType`

GetHttpTransactionMessage returns the HttpTransactionMessage field if non-nil, zero value otherwise.

### GetHttpTransactionMessageOk

`func (o *VaultTransaction) GetHttpTransactionMessageOk() (*VaultHTTPTransactionMessageType, bool)`

GetHttpTransactionMessageOk returns a tuple with the HttpTransactionMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHttpTransactionMessage

`func (o *VaultTransaction) SetHttpTransactionMessage(v VaultHTTPTransactionMessageType)`

SetHttpTransactionMessage sets HttpTransactionMessage field to given value.

### HasHttpTransactionMessage

`func (o *VaultTransaction) HasHttpTransactionMessage() bool`

HasHttpTransactionMessage returns a boolean if a field has been set.

### GetLinks

`func (o *VaultTransaction) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *VaultTransaction) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *VaultTransaction) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *VaultTransaction) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *VaultTransaction) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *VaultTransaction) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *VaultTransaction) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *VaultTransaction) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



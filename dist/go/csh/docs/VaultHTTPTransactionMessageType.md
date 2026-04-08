# VaultHTTPTransactionMessageType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | The hotel context of the transaction. | [optional] 
**EscapedRequestContent** | Pointer to **string** | The HTTP request entity content. The needs to use escape characters. | [optional] 
**EscapedResponseContent** | Pointer to **string** | The HTTP response entity content. The needs to use escape characters. | [optional] 
**HTTPTransactionDuration** | Pointer to [**DateRangeType**](DateRangeType.md) |  | [optional] 
**HTTPError** | Pointer to [**ErrorType**](ErrorType.md) |  | [optional] 
**AuthorizationApproval** | Pointer to [**VaultHTTPTransactionMessageTypeAuthorizationApproval**](VaultHTTPTransactionMessageTypeAuthorizationApproval.md) |  | [optional] 
**Type** | Pointer to [**VaultHTTPTransactionType**](VaultHTTPTransactionType.md) |  | [optional] 

## Methods

### NewVaultHTTPTransactionMessageType

`func NewVaultHTTPTransactionMessageType() *VaultHTTPTransactionMessageType`

NewVaultHTTPTransactionMessageType instantiates a new VaultHTTPTransactionMessageType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVaultHTTPTransactionMessageTypeWithDefaults

`func NewVaultHTTPTransactionMessageTypeWithDefaults() *VaultHTTPTransactionMessageType`

NewVaultHTTPTransactionMessageTypeWithDefaults instantiates a new VaultHTTPTransactionMessageType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *VaultHTTPTransactionMessageType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *VaultHTTPTransactionMessageType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *VaultHTTPTransactionMessageType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *VaultHTTPTransactionMessageType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetEscapedRequestContent

`func (o *VaultHTTPTransactionMessageType) GetEscapedRequestContent() string`

GetEscapedRequestContent returns the EscapedRequestContent field if non-nil, zero value otherwise.

### GetEscapedRequestContentOk

`func (o *VaultHTTPTransactionMessageType) GetEscapedRequestContentOk() (*string, bool)`

GetEscapedRequestContentOk returns a tuple with the EscapedRequestContent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEscapedRequestContent

`func (o *VaultHTTPTransactionMessageType) SetEscapedRequestContent(v string)`

SetEscapedRequestContent sets EscapedRequestContent field to given value.

### HasEscapedRequestContent

`func (o *VaultHTTPTransactionMessageType) HasEscapedRequestContent() bool`

HasEscapedRequestContent returns a boolean if a field has been set.

### GetEscapedResponseContent

`func (o *VaultHTTPTransactionMessageType) GetEscapedResponseContent() string`

GetEscapedResponseContent returns the EscapedResponseContent field if non-nil, zero value otherwise.

### GetEscapedResponseContentOk

`func (o *VaultHTTPTransactionMessageType) GetEscapedResponseContentOk() (*string, bool)`

GetEscapedResponseContentOk returns a tuple with the EscapedResponseContent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEscapedResponseContent

`func (o *VaultHTTPTransactionMessageType) SetEscapedResponseContent(v string)`

SetEscapedResponseContent sets EscapedResponseContent field to given value.

### HasEscapedResponseContent

`func (o *VaultHTTPTransactionMessageType) HasEscapedResponseContent() bool`

HasEscapedResponseContent returns a boolean if a field has been set.

### GetHTTPTransactionDuration

`func (o *VaultHTTPTransactionMessageType) GetHTTPTransactionDuration() DateRangeType`

GetHTTPTransactionDuration returns the HTTPTransactionDuration field if non-nil, zero value otherwise.

### GetHTTPTransactionDurationOk

`func (o *VaultHTTPTransactionMessageType) GetHTTPTransactionDurationOk() (*DateRangeType, bool)`

GetHTTPTransactionDurationOk returns a tuple with the HTTPTransactionDuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHTTPTransactionDuration

`func (o *VaultHTTPTransactionMessageType) SetHTTPTransactionDuration(v DateRangeType)`

SetHTTPTransactionDuration sets HTTPTransactionDuration field to given value.

### HasHTTPTransactionDuration

`func (o *VaultHTTPTransactionMessageType) HasHTTPTransactionDuration() bool`

HasHTTPTransactionDuration returns a boolean if a field has been set.

### GetHTTPError

`func (o *VaultHTTPTransactionMessageType) GetHTTPError() ErrorType`

GetHTTPError returns the HTTPError field if non-nil, zero value otherwise.

### GetHTTPErrorOk

`func (o *VaultHTTPTransactionMessageType) GetHTTPErrorOk() (*ErrorType, bool)`

GetHTTPErrorOk returns a tuple with the HTTPError field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHTTPError

`func (o *VaultHTTPTransactionMessageType) SetHTTPError(v ErrorType)`

SetHTTPError sets HTTPError field to given value.

### HasHTTPError

`func (o *VaultHTTPTransactionMessageType) HasHTTPError() bool`

HasHTTPError returns a boolean if a field has been set.

### GetAuthorizationApproval

`func (o *VaultHTTPTransactionMessageType) GetAuthorizationApproval() VaultHTTPTransactionMessageTypeAuthorizationApproval`

GetAuthorizationApproval returns the AuthorizationApproval field if non-nil, zero value otherwise.

### GetAuthorizationApprovalOk

`func (o *VaultHTTPTransactionMessageType) GetAuthorizationApprovalOk() (*VaultHTTPTransactionMessageTypeAuthorizationApproval, bool)`

GetAuthorizationApprovalOk returns a tuple with the AuthorizationApproval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizationApproval

`func (o *VaultHTTPTransactionMessageType) SetAuthorizationApproval(v VaultHTTPTransactionMessageTypeAuthorizationApproval)`

SetAuthorizationApproval sets AuthorizationApproval field to given value.

### HasAuthorizationApproval

`func (o *VaultHTTPTransactionMessageType) HasAuthorizationApproval() bool`

HasAuthorizationApproval returns a boolean if a field has been set.

### GetType

`func (o *VaultHTTPTransactionMessageType) GetType() VaultHTTPTransactionType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *VaultHTTPTransactionMessageType) GetTypeOk() (*VaultHTTPTransactionType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *VaultHTTPTransactionMessageType) SetType(v VaultHTTPTransactionType)`

SetType sets Type field to given value.

### HasType

`func (o *VaultHTTPTransactionMessageType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



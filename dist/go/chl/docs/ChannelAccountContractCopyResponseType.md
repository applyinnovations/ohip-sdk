# ChannelAccountContractCopyResponseType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountCode** | Pointer to **string** | Target Account code to which contract is copied. | [optional] 
**AccountId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ContractResponseInformation** | Pointer to [**[]ChannelAccountContractCopyResponseTypeContractResponseInformationInner**](ChannelAccountContractCopyResponseTypeContractResponseInformationInner.md) | Holds contract Id of the contract copied. | [optional] 
**ErrorMessage** | Pointer to [**ErrorType**](ErrorType.md) |  | [optional] 

## Methods

### NewChannelAccountContractCopyResponseType

`func NewChannelAccountContractCopyResponseType() *ChannelAccountContractCopyResponseType`

NewChannelAccountContractCopyResponseType instantiates a new ChannelAccountContractCopyResponseType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelAccountContractCopyResponseTypeWithDefaults

`func NewChannelAccountContractCopyResponseTypeWithDefaults() *ChannelAccountContractCopyResponseType`

NewChannelAccountContractCopyResponseTypeWithDefaults instantiates a new ChannelAccountContractCopyResponseType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountCode

`func (o *ChannelAccountContractCopyResponseType) GetAccountCode() string`

GetAccountCode returns the AccountCode field if non-nil, zero value otherwise.

### GetAccountCodeOk

`func (o *ChannelAccountContractCopyResponseType) GetAccountCodeOk() (*string, bool)`

GetAccountCodeOk returns a tuple with the AccountCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountCode

`func (o *ChannelAccountContractCopyResponseType) SetAccountCode(v string)`

SetAccountCode sets AccountCode field to given value.

### HasAccountCode

`func (o *ChannelAccountContractCopyResponseType) HasAccountCode() bool`

HasAccountCode returns a boolean if a field has been set.

### GetAccountId

`func (o *ChannelAccountContractCopyResponseType) GetAccountId() UniqueIDType`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *ChannelAccountContractCopyResponseType) GetAccountIdOk() (*UniqueIDType, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *ChannelAccountContractCopyResponseType) SetAccountId(v UniqueIDType)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *ChannelAccountContractCopyResponseType) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetContractResponseInformation

`func (o *ChannelAccountContractCopyResponseType) GetContractResponseInformation() []ChannelAccountContractCopyResponseTypeContractResponseInformationInner`

GetContractResponseInformation returns the ContractResponseInformation field if non-nil, zero value otherwise.

### GetContractResponseInformationOk

`func (o *ChannelAccountContractCopyResponseType) GetContractResponseInformationOk() (*[]ChannelAccountContractCopyResponseTypeContractResponseInformationInner, bool)`

GetContractResponseInformationOk returns a tuple with the ContractResponseInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractResponseInformation

`func (o *ChannelAccountContractCopyResponseType) SetContractResponseInformation(v []ChannelAccountContractCopyResponseTypeContractResponseInformationInner)`

SetContractResponseInformation sets ContractResponseInformation field to given value.

### HasContractResponseInformation

`func (o *ChannelAccountContractCopyResponseType) HasContractResponseInformation() bool`

HasContractResponseInformation returns a boolean if a field has been set.

### GetErrorMessage

`func (o *ChannelAccountContractCopyResponseType) GetErrorMessage() ErrorType`

GetErrorMessage returns the ErrorMessage field if non-nil, zero value otherwise.

### GetErrorMessageOk

`func (o *ChannelAccountContractCopyResponseType) GetErrorMessageOk() (*ErrorType, bool)`

GetErrorMessageOk returns a tuple with the ErrorMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorMessage

`func (o *ChannelAccountContractCopyResponseType) SetErrorMessage(v ErrorType)`

SetErrorMessage sets ErrorMessage field to given value.

### HasErrorMessage

`func (o *ChannelAccountContractCopyResponseType) HasErrorMessage() bool`

HasErrorMessage returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



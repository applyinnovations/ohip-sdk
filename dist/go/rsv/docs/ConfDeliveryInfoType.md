# ConfDeliveryInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommunicationType** | Pointer to [**ConfDeliveryMethod**](ConfDeliveryMethod.md) |  | [optional] 
**LastAttempted** | Pointer to **string** | Date of last attempt to send confirmation letter. | [optional] 
**LastStatus** | Pointer to [**SentConfirmationStatus**](SentConfirmationStatus.md) |  | [optional] 
**SuccessfulTries** | Pointer to **int32** | Number of success letter sent. | [optional] 

## Methods

### NewConfDeliveryInfoType

`func NewConfDeliveryInfoType() *ConfDeliveryInfoType`

NewConfDeliveryInfoType instantiates a new ConfDeliveryInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfDeliveryInfoTypeWithDefaults

`func NewConfDeliveryInfoTypeWithDefaults() *ConfDeliveryInfoType`

NewConfDeliveryInfoTypeWithDefaults instantiates a new ConfDeliveryInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommunicationType

`func (o *ConfDeliveryInfoType) GetCommunicationType() ConfDeliveryMethod`

GetCommunicationType returns the CommunicationType field if non-nil, zero value otherwise.

### GetCommunicationTypeOk

`func (o *ConfDeliveryInfoType) GetCommunicationTypeOk() (*ConfDeliveryMethod, bool)`

GetCommunicationTypeOk returns a tuple with the CommunicationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommunicationType

`func (o *ConfDeliveryInfoType) SetCommunicationType(v ConfDeliveryMethod)`

SetCommunicationType sets CommunicationType field to given value.

### HasCommunicationType

`func (o *ConfDeliveryInfoType) HasCommunicationType() bool`

HasCommunicationType returns a boolean if a field has been set.

### GetLastAttempted

`func (o *ConfDeliveryInfoType) GetLastAttempted() string`

GetLastAttempted returns the LastAttempted field if non-nil, zero value otherwise.

### GetLastAttemptedOk

`func (o *ConfDeliveryInfoType) GetLastAttemptedOk() (*string, bool)`

GetLastAttemptedOk returns a tuple with the LastAttempted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastAttempted

`func (o *ConfDeliveryInfoType) SetLastAttempted(v string)`

SetLastAttempted sets LastAttempted field to given value.

### HasLastAttempted

`func (o *ConfDeliveryInfoType) HasLastAttempted() bool`

HasLastAttempted returns a boolean if a field has been set.

### GetLastStatus

`func (o *ConfDeliveryInfoType) GetLastStatus() SentConfirmationStatus`

GetLastStatus returns the LastStatus field if non-nil, zero value otherwise.

### GetLastStatusOk

`func (o *ConfDeliveryInfoType) GetLastStatusOk() (*SentConfirmationStatus, bool)`

GetLastStatusOk returns a tuple with the LastStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastStatus

`func (o *ConfDeliveryInfoType) SetLastStatus(v SentConfirmationStatus)`

SetLastStatus sets LastStatus field to given value.

### HasLastStatus

`func (o *ConfDeliveryInfoType) HasLastStatus() bool`

HasLastStatus returns a boolean if a field has been set.

### GetSuccessfulTries

`func (o *ConfDeliveryInfoType) GetSuccessfulTries() int32`

GetSuccessfulTries returns the SuccessfulTries field if non-nil, zero value otherwise.

### GetSuccessfulTriesOk

`func (o *ConfDeliveryInfoType) GetSuccessfulTriesOk() (*int32, bool)`

GetSuccessfulTriesOk returns a tuple with the SuccessfulTries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccessfulTries

`func (o *ConfDeliveryInfoType) SetSuccessfulTries(v int32)`

SetSuccessfulTries sets SuccessfulTries field to given value.

### HasSuccessfulTries

`func (o *ConfDeliveryInfoType) HasSuccessfulTries() bool`

HasSuccessfulTries returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# QueueTextInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SentTime** | Pointer to **time.Time** | Time the text was last sent to the user. | [optional] 
**SentBy** | Pointer to **string** | User name of the user who sent message. | [optional] 

## Methods

### NewQueueTextInfoType

`func NewQueueTextInfoType() *QueueTextInfoType`

NewQueueTextInfoType instantiates a new QueueTextInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewQueueTextInfoTypeWithDefaults

`func NewQueueTextInfoTypeWithDefaults() *QueueTextInfoType`

NewQueueTextInfoTypeWithDefaults instantiates a new QueueTextInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSentTime

`func (o *QueueTextInfoType) GetSentTime() time.Time`

GetSentTime returns the SentTime field if non-nil, zero value otherwise.

### GetSentTimeOk

`func (o *QueueTextInfoType) GetSentTimeOk() (*time.Time, bool)`

GetSentTimeOk returns a tuple with the SentTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSentTime

`func (o *QueueTextInfoType) SetSentTime(v time.Time)`

SetSentTime sets SentTime field to given value.

### HasSentTime

`func (o *QueueTextInfoType) HasSentTime() bool`

HasSentTime returns a boolean if a field has been set.

### GetSentBy

`func (o *QueueTextInfoType) GetSentBy() string`

GetSentBy returns the SentBy field if non-nil, zero value otherwise.

### GetSentByOk

`func (o *QueueTextInfoType) GetSentByOk() (*string, bool)`

GetSentByOk returns a tuple with the SentBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSentBy

`func (o *QueueTextInfoType) SetSentBy(v string)`

SetSentBy sets SentBy field to given value.

### HasSentBy

`func (o *QueueTextInfoType) HasSentBy() bool`

HasSentBy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



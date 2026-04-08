# CateringEventPostingsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CateringEventPosting** | Pointer to [**[]CateringEventPostingType**](CateringEventPostingType.md) | Pertain catering event&#39;s posting information. | [optional] 
**EventId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 

## Methods

### NewCateringEventPostingsType

`func NewCateringEventPostingsType() *CateringEventPostingsType`

NewCateringEventPostingsType instantiates a new CateringEventPostingsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringEventPostingsTypeWithDefaults

`func NewCateringEventPostingsTypeWithDefaults() *CateringEventPostingsType`

NewCateringEventPostingsTypeWithDefaults instantiates a new CateringEventPostingsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCateringEventPosting

`func (o *CateringEventPostingsType) GetCateringEventPosting() []CateringEventPostingType`

GetCateringEventPosting returns the CateringEventPosting field if non-nil, zero value otherwise.

### GetCateringEventPostingOk

`func (o *CateringEventPostingsType) GetCateringEventPostingOk() (*[]CateringEventPostingType, bool)`

GetCateringEventPostingOk returns a tuple with the CateringEventPosting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringEventPosting

`func (o *CateringEventPostingsType) SetCateringEventPosting(v []CateringEventPostingType)`

SetCateringEventPosting sets CateringEventPosting field to given value.

### HasCateringEventPosting

`func (o *CateringEventPostingsType) HasCateringEventPosting() bool`

HasCateringEventPosting returns a boolean if a field has been set.

### GetEventId

`func (o *CateringEventPostingsType) GetEventId() UniqueIDType`

GetEventId returns the EventId field if non-nil, zero value otherwise.

### GetEventIdOk

`func (o *CateringEventPostingsType) GetEventIdOk() (*UniqueIDType, bool)`

GetEventIdOk returns a tuple with the EventId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventId

`func (o *CateringEventPostingsType) SetEventId(v UniqueIDType)`

SetEventId sets EventId field to given value.

### HasEventId

`func (o *CateringEventPostingsType) HasEventId() bool`

HasEventId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



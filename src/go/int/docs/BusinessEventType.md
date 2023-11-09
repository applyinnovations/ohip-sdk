# BusinessEventType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Details** | Pointer to [**BusinessEventDetailsType**](BusinessEventDetailsType.md) |  | [optional] 
**Header** | Pointer to [**BusinessEventHeaderType**](BusinessEventHeaderType.md) |  | [optional] 

## Methods

### NewBusinessEventType

`func NewBusinessEventType() *BusinessEventType`

NewBusinessEventType instantiates a new BusinessEventType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBusinessEventTypeWithDefaults

`func NewBusinessEventTypeWithDefaults() *BusinessEventType`

NewBusinessEventTypeWithDefaults instantiates a new BusinessEventType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDetails

`func (o *BusinessEventType) GetDetails() BusinessEventDetailsType`

GetDetails returns the Details field if non-nil, zero value otherwise.

### GetDetailsOk

`func (o *BusinessEventType) GetDetailsOk() (*BusinessEventDetailsType, bool)`

GetDetailsOk returns a tuple with the Details field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetails

`func (o *BusinessEventType) SetDetails(v BusinessEventDetailsType)`

SetDetails sets Details field to given value.

### HasDetails

`func (o *BusinessEventType) HasDetails() bool`

HasDetails returns a boolean if a field has been set.

### GetHeader

`func (o *BusinessEventType) GetHeader() BusinessEventHeaderType`

GetHeader returns the Header field if non-nil, zero value otherwise.

### GetHeaderOk

`func (o *BusinessEventType) GetHeaderOk() (*BusinessEventHeaderType, bool)`

GetHeaderOk returns a tuple with the Header field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeader

`func (o *BusinessEventType) SetHeader(v BusinessEventHeaderType)`

SetHeader sets Header field to given value.

### HasHeader

`func (o *BusinessEventType) HasHeader() bool`

HasHeader returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



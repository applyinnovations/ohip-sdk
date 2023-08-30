# EventOrderType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Distributed** | Pointer to **bool** | Indicates if the Banquet Event Orders have been distributed. | [optional] 
**DistributedDate** | Pointer to **string** | This indicates which exchange rate date will be used for blocks when printing Banquet Event Orders. When the Distributed attribute is true this contains the date stamp of when the Distributed attribute was updated. When Distributed attribute is false, this is left blank. This date can also be taken into consideration as the &#39;Exchange Rate Date&#39; when, for instance, converting catering revenue to base currency. | [optional] 
**DistributedDateTime** | Pointer to **time.Time** | This indicates which exchange rate date will be used for blocks when printing Banquet Event Orders. When the Distributed attribute is true this contains the date/time stamp of when the Distributed attribute was updated. When Distributed attribute is false, this is left blank. This date can also be taken into consideration as the &#39;Exchange Rate Date&#39; when, for instance, converting catering revenue to base currency. | [optional] 

## Methods

### NewEventOrderType

`func NewEventOrderType() *EventOrderType`

NewEventOrderType instantiates a new EventOrderType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventOrderTypeWithDefaults

`func NewEventOrderTypeWithDefaults() *EventOrderType`

NewEventOrderTypeWithDefaults instantiates a new EventOrderType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDistributed

`func (o *EventOrderType) GetDistributed() bool`

GetDistributed returns the Distributed field if non-nil, zero value otherwise.

### GetDistributedOk

`func (o *EventOrderType) GetDistributedOk() (*bool, bool)`

GetDistributedOk returns a tuple with the Distributed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDistributed

`func (o *EventOrderType) SetDistributed(v bool)`

SetDistributed sets Distributed field to given value.

### HasDistributed

`func (o *EventOrderType) HasDistributed() bool`

HasDistributed returns a boolean if a field has been set.

### GetDistributedDate

`func (o *EventOrderType) GetDistributedDate() string`

GetDistributedDate returns the DistributedDate field if non-nil, zero value otherwise.

### GetDistributedDateOk

`func (o *EventOrderType) GetDistributedDateOk() (*string, bool)`

GetDistributedDateOk returns a tuple with the DistributedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDistributedDate

`func (o *EventOrderType) SetDistributedDate(v string)`

SetDistributedDate sets DistributedDate field to given value.

### HasDistributedDate

`func (o *EventOrderType) HasDistributedDate() bool`

HasDistributedDate returns a boolean if a field has been set.

### GetDistributedDateTime

`func (o *EventOrderType) GetDistributedDateTime() time.Time`

GetDistributedDateTime returns the DistributedDateTime field if non-nil, zero value otherwise.

### GetDistributedDateTimeOk

`func (o *EventOrderType) GetDistributedDateTimeOk() (*time.Time, bool)`

GetDistributedDateTimeOk returns a tuple with the DistributedDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDistributedDateTime

`func (o *EventOrderType) SetDistributedDateTime(v time.Time)`

SetDistributedDateTime sets DistributedDateTime field to given value.

### HasDistributedDateTime

`func (o *EventOrderType) HasDistributedDateTime() bool`

HasDistributedDateTime returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



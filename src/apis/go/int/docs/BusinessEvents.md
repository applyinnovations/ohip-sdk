# BusinessEvents

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BusinessEventData** | Pointer to [**[]BusinessEventDataType**](BusinessEventDataType.md) | List of BusinessEvents dequeued for given external system | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBusinessEvents

`func NewBusinessEvents() *BusinessEvents`

NewBusinessEvents instantiates a new BusinessEvents object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBusinessEventsWithDefaults

`func NewBusinessEventsWithDefaults() *BusinessEvents`

NewBusinessEventsWithDefaults instantiates a new BusinessEvents object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBusinessEventData

`func (o *BusinessEvents) GetBusinessEventData() []BusinessEventDataType`

GetBusinessEventData returns the BusinessEventData field if non-nil, zero value otherwise.

### GetBusinessEventDataOk

`func (o *BusinessEvents) GetBusinessEventDataOk() (*[]BusinessEventDataType, bool)`

GetBusinessEventDataOk returns a tuple with the BusinessEventData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessEventData

`func (o *BusinessEvents) SetBusinessEventData(v []BusinessEventDataType)`

SetBusinessEventData sets BusinessEventData field to given value.

### HasBusinessEventData

`func (o *BusinessEvents) HasBusinessEventData() bool`

HasBusinessEventData returns a boolean if a field has been set.

### GetLinks

`func (o *BusinessEvents) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BusinessEvents) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BusinessEvents) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BusinessEvents) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BusinessEvents) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BusinessEvents) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BusinessEvents) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BusinessEvents) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



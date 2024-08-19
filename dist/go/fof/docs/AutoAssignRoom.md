# AutoAssignRoom

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**ReservationAutoRoomAssignRequestType**](ReservationAutoRoomAssignRequestType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAutoAssignRoom

`func NewAutoAssignRoom() *AutoAssignRoom`

NewAutoAssignRoom instantiates a new AutoAssignRoom object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAutoAssignRoomWithDefaults

`func NewAutoAssignRoomWithDefaults() *AutoAssignRoom`

NewAutoAssignRoomWithDefaults instantiates a new AutoAssignRoom object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *AutoAssignRoom) GetCriteria() ReservationAutoRoomAssignRequestType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *AutoAssignRoom) GetCriteriaOk() (*ReservationAutoRoomAssignRequestType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *AutoAssignRoom) SetCriteria(v ReservationAutoRoomAssignRequestType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *AutoAssignRoom) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *AutoAssignRoom) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AutoAssignRoom) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AutoAssignRoom) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AutoAssignRoom) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AutoAssignRoom) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AutoAssignRoom) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AutoAssignRoom) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AutoAssignRoom) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



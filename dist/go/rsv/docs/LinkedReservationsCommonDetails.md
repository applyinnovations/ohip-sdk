# LinkedReservationsCommonDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LinkedReservationsCommonDetails** | Pointer to [**LinkedReservationsCommonDetailsType**](LinkedReservationsCommonDetailsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewLinkedReservationsCommonDetails

`func NewLinkedReservationsCommonDetails() *LinkedReservationsCommonDetails`

NewLinkedReservationsCommonDetails instantiates a new LinkedReservationsCommonDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLinkedReservationsCommonDetailsWithDefaults

`func NewLinkedReservationsCommonDetailsWithDefaults() *LinkedReservationsCommonDetails`

NewLinkedReservationsCommonDetailsWithDefaults instantiates a new LinkedReservationsCommonDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinkedReservationsCommonDetails

`func (o *LinkedReservationsCommonDetails) GetLinkedReservationsCommonDetails() LinkedReservationsCommonDetailsType`

GetLinkedReservationsCommonDetails returns the LinkedReservationsCommonDetails field if non-nil, zero value otherwise.

### GetLinkedReservationsCommonDetailsOk

`func (o *LinkedReservationsCommonDetails) GetLinkedReservationsCommonDetailsOk() (*LinkedReservationsCommonDetailsType, bool)`

GetLinkedReservationsCommonDetailsOk returns a tuple with the LinkedReservationsCommonDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkedReservationsCommonDetails

`func (o *LinkedReservationsCommonDetails) SetLinkedReservationsCommonDetails(v LinkedReservationsCommonDetailsType)`

SetLinkedReservationsCommonDetails sets LinkedReservationsCommonDetails field to given value.

### HasLinkedReservationsCommonDetails

`func (o *LinkedReservationsCommonDetails) HasLinkedReservationsCommonDetails() bool`

HasLinkedReservationsCommonDetails returns a boolean if a field has been set.

### GetLinks

`func (o *LinkedReservationsCommonDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *LinkedReservationsCommonDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *LinkedReservationsCommonDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *LinkedReservationsCommonDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *LinkedReservationsCommonDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *LinkedReservationsCommonDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *LinkedReservationsCommonDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *LinkedReservationsCommonDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



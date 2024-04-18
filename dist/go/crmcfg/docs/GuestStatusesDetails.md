# GuestStatusesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GuestStatuses** | Pointer to [**[]GuestStatusType**](GuestStatusType.md) | List of Guest Statuses. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewGuestStatusesDetails

`func NewGuestStatusesDetails() *GuestStatusesDetails`

NewGuestStatusesDetails instantiates a new GuestStatusesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGuestStatusesDetailsWithDefaults

`func NewGuestStatusesDetailsWithDefaults() *GuestStatusesDetails`

NewGuestStatusesDetailsWithDefaults instantiates a new GuestStatusesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGuestStatuses

`func (o *GuestStatusesDetails) GetGuestStatuses() []GuestStatusType`

GetGuestStatuses returns the GuestStatuses field if non-nil, zero value otherwise.

### GetGuestStatusesOk

`func (o *GuestStatusesDetails) GetGuestStatusesOk() (*[]GuestStatusType, bool)`

GetGuestStatusesOk returns a tuple with the GuestStatuses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestStatuses

`func (o *GuestStatusesDetails) SetGuestStatuses(v []GuestStatusType)`

SetGuestStatuses sets GuestStatuses field to given value.

### HasGuestStatuses

`func (o *GuestStatusesDetails) HasGuestStatuses() bool`

HasGuestStatuses returns a boolean if a field has been set.

### GetLinks

`func (o *GuestStatusesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *GuestStatusesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *GuestStatusesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *GuestStatusesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *GuestStatusesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *GuestStatusesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *GuestStatusesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *GuestStatusesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


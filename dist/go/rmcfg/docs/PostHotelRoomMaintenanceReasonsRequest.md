# PostHotelRoomMaintenanceReasonsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelRoomMaintenanceReasons** | Pointer to [**[]HotelRoomMaintenanceReasonType**](HotelRoomMaintenanceReasonType.md) | Details for room maintenance reason at hotel level. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostHotelRoomMaintenanceReasonsRequest

`func NewPostHotelRoomMaintenanceReasonsRequest() *PostHotelRoomMaintenanceReasonsRequest`

NewPostHotelRoomMaintenanceReasonsRequest instantiates a new PostHotelRoomMaintenanceReasonsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostHotelRoomMaintenanceReasonsRequestWithDefaults

`func NewPostHotelRoomMaintenanceReasonsRequestWithDefaults() *PostHotelRoomMaintenanceReasonsRequest`

NewPostHotelRoomMaintenanceReasonsRequestWithDefaults instantiates a new PostHotelRoomMaintenanceReasonsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelRoomMaintenanceReasons

`func (o *PostHotelRoomMaintenanceReasonsRequest) GetHotelRoomMaintenanceReasons() []HotelRoomMaintenanceReasonType`

GetHotelRoomMaintenanceReasons returns the HotelRoomMaintenanceReasons field if non-nil, zero value otherwise.

### GetHotelRoomMaintenanceReasonsOk

`func (o *PostHotelRoomMaintenanceReasonsRequest) GetHotelRoomMaintenanceReasonsOk() (*[]HotelRoomMaintenanceReasonType, bool)`

GetHotelRoomMaintenanceReasonsOk returns a tuple with the HotelRoomMaintenanceReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelRoomMaintenanceReasons

`func (o *PostHotelRoomMaintenanceReasonsRequest) SetHotelRoomMaintenanceReasons(v []HotelRoomMaintenanceReasonType)`

SetHotelRoomMaintenanceReasons sets HotelRoomMaintenanceReasons field to given value.

### HasHotelRoomMaintenanceReasons

`func (o *PostHotelRoomMaintenanceReasonsRequest) HasHotelRoomMaintenanceReasons() bool`

HasHotelRoomMaintenanceReasons returns a boolean if a field has been set.

### GetLinks

`func (o *PostHotelRoomMaintenanceReasonsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostHotelRoomMaintenanceReasonsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostHotelRoomMaintenanceReasonsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostHotelRoomMaintenanceReasonsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostHotelRoomMaintenanceReasonsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostHotelRoomMaintenanceReasonsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostHotelRoomMaintenanceReasonsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostHotelRoomMaintenanceReasonsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



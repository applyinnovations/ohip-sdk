# ManageRatePlansSchedulesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelRatePlansSchedules** | Pointer to [**[]HotelRatePlanSchedulesType**](HotelRatePlanSchedulesType.md) | Hotel rate plan schedules to be managed. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewManageRatePlansSchedulesRequest

`func NewManageRatePlansSchedulesRequest() *ManageRatePlansSchedulesRequest`

NewManageRatePlansSchedulesRequest instantiates a new ManageRatePlansSchedulesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManageRatePlansSchedulesRequestWithDefaults

`func NewManageRatePlansSchedulesRequestWithDefaults() *ManageRatePlansSchedulesRequest`

NewManageRatePlansSchedulesRequestWithDefaults instantiates a new ManageRatePlansSchedulesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelRatePlansSchedules

`func (o *ManageRatePlansSchedulesRequest) GetHotelRatePlansSchedules() []HotelRatePlanSchedulesType`

GetHotelRatePlansSchedules returns the HotelRatePlansSchedules field if non-nil, zero value otherwise.

### GetHotelRatePlansSchedulesOk

`func (o *ManageRatePlansSchedulesRequest) GetHotelRatePlansSchedulesOk() (*[]HotelRatePlanSchedulesType, bool)`

GetHotelRatePlansSchedulesOk returns a tuple with the HotelRatePlansSchedules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelRatePlansSchedules

`func (o *ManageRatePlansSchedulesRequest) SetHotelRatePlansSchedules(v []HotelRatePlanSchedulesType)`

SetHotelRatePlansSchedules sets HotelRatePlansSchedules field to given value.

### HasHotelRatePlansSchedules

`func (o *ManageRatePlansSchedulesRequest) HasHotelRatePlansSchedules() bool`

HasHotelRatePlansSchedules returns a boolean if a field has been set.

### GetLinks

`func (o *ManageRatePlansSchedulesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ManageRatePlansSchedulesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ManageRatePlansSchedulesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ManageRatePlansSchedulesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ManageRatePlansSchedulesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ManageRatePlansSchedulesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ManageRatePlansSchedulesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ManageRatePlansSchedulesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



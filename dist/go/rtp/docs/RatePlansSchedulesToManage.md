# RatePlansSchedulesToManage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelRatePlansSchedules** | Pointer to [**[]HotelRatePlanSchedulesType**](HotelRatePlanSchedulesType.md) | Hotel rate plan schedules to be managed. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRatePlansSchedulesToManage

`func NewRatePlansSchedulesToManage() *RatePlansSchedulesToManage`

NewRatePlansSchedulesToManage instantiates a new RatePlansSchedulesToManage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatePlansSchedulesToManageWithDefaults

`func NewRatePlansSchedulesToManageWithDefaults() *RatePlansSchedulesToManage`

NewRatePlansSchedulesToManageWithDefaults instantiates a new RatePlansSchedulesToManage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelRatePlansSchedules

`func (o *RatePlansSchedulesToManage) GetHotelRatePlansSchedules() []HotelRatePlanSchedulesType`

GetHotelRatePlansSchedules returns the HotelRatePlansSchedules field if non-nil, zero value otherwise.

### GetHotelRatePlansSchedulesOk

`func (o *RatePlansSchedulesToManage) GetHotelRatePlansSchedulesOk() (*[]HotelRatePlanSchedulesType, bool)`

GetHotelRatePlansSchedulesOk returns a tuple with the HotelRatePlansSchedules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelRatePlansSchedules

`func (o *RatePlansSchedulesToManage) SetHotelRatePlansSchedules(v []HotelRatePlanSchedulesType)`

SetHotelRatePlansSchedules sets HotelRatePlansSchedules field to given value.

### HasHotelRatePlansSchedules

`func (o *RatePlansSchedulesToManage) HasHotelRatePlansSchedules() bool`

HasHotelRatePlansSchedules returns a boolean if a field has been set.

### GetLinks

`func (o *RatePlansSchedulesToManage) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RatePlansSchedulesToManage) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RatePlansSchedulesToManage) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RatePlansSchedulesToManage) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RatePlansSchedulesToManage) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RatePlansSchedulesToManage) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RatePlansSchedulesToManage) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RatePlansSchedulesToManage) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



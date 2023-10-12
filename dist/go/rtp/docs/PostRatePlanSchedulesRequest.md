# PostRatePlanSchedulesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**RatePlanCode** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**RatePlanScheduleList** | Pointer to [**[]RatePlanScheduleDetailType**](RatePlanScheduleDetailType.md) | List of rate plan schedules to be created. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostRatePlanSchedulesRequest

`func NewPostRatePlanSchedulesRequest() *PostRatePlanSchedulesRequest`

NewPostRatePlanSchedulesRequest instantiates a new PostRatePlanSchedulesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostRatePlanSchedulesRequestWithDefaults

`func NewPostRatePlanSchedulesRequestWithDefaults() *PostRatePlanSchedulesRequest`

NewPostRatePlanSchedulesRequestWithDefaults instantiates a new PostRatePlanSchedulesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *PostRatePlanSchedulesRequest) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PostRatePlanSchedulesRequest) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PostRatePlanSchedulesRequest) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PostRatePlanSchedulesRequest) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *PostRatePlanSchedulesRequest) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *PostRatePlanSchedulesRequest) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *PostRatePlanSchedulesRequest) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *PostRatePlanSchedulesRequest) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetRatePlanScheduleList

`func (o *PostRatePlanSchedulesRequest) GetRatePlanScheduleList() []RatePlanScheduleDetailType`

GetRatePlanScheduleList returns the RatePlanScheduleList field if non-nil, zero value otherwise.

### GetRatePlanScheduleListOk

`func (o *PostRatePlanSchedulesRequest) GetRatePlanScheduleListOk() (*[]RatePlanScheduleDetailType, bool)`

GetRatePlanScheduleListOk returns a tuple with the RatePlanScheduleList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanScheduleList

`func (o *PostRatePlanSchedulesRequest) SetRatePlanScheduleList(v []RatePlanScheduleDetailType)`

SetRatePlanScheduleList sets RatePlanScheduleList field to given value.

### HasRatePlanScheduleList

`func (o *PostRatePlanSchedulesRequest) HasRatePlanScheduleList() bool`

HasRatePlanScheduleList returns a boolean if a field has been set.

### GetLinks

`func (o *PostRatePlanSchedulesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostRatePlanSchedulesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostRatePlanSchedulesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostRatePlanSchedulesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostRatePlanSchedulesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostRatePlanSchedulesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostRatePlanSchedulesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostRatePlanSchedulesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# PutRatePlanSchedulesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**RatePlanCode** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**RatePlanScheduleList** | Pointer to [**[]UpdateRatePlanSchedulesType**](UpdateRatePlanSchedulesType.md) | List of rate plan schedules to be updated. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutRatePlanSchedulesRequest

`func NewPutRatePlanSchedulesRequest() *PutRatePlanSchedulesRequest`

NewPutRatePlanSchedulesRequest instantiates a new PutRatePlanSchedulesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutRatePlanSchedulesRequestWithDefaults

`func NewPutRatePlanSchedulesRequestWithDefaults() *PutRatePlanSchedulesRequest`

NewPutRatePlanSchedulesRequestWithDefaults instantiates a new PutRatePlanSchedulesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *PutRatePlanSchedulesRequest) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PutRatePlanSchedulesRequest) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PutRatePlanSchedulesRequest) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PutRatePlanSchedulesRequest) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *PutRatePlanSchedulesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutRatePlanSchedulesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutRatePlanSchedulesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutRatePlanSchedulesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *PutRatePlanSchedulesRequest) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *PutRatePlanSchedulesRequest) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *PutRatePlanSchedulesRequest) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *PutRatePlanSchedulesRequest) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetRatePlanScheduleList

`func (o *PutRatePlanSchedulesRequest) GetRatePlanScheduleList() []UpdateRatePlanSchedulesType`

GetRatePlanScheduleList returns the RatePlanScheduleList field if non-nil, zero value otherwise.

### GetRatePlanScheduleListOk

`func (o *PutRatePlanSchedulesRequest) GetRatePlanScheduleListOk() (*[]UpdateRatePlanSchedulesType, bool)`

GetRatePlanScheduleListOk returns a tuple with the RatePlanScheduleList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanScheduleList

`func (o *PutRatePlanSchedulesRequest) SetRatePlanScheduleList(v []UpdateRatePlanSchedulesType)`

SetRatePlanScheduleList sets RatePlanScheduleList field to given value.

### HasRatePlanScheduleList

`func (o *PutRatePlanSchedulesRequest) HasRatePlanScheduleList() bool`

HasRatePlanScheduleList returns a boolean if a field has been set.

### GetWarnings

`func (o *PutRatePlanSchedulesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutRatePlanSchedulesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutRatePlanSchedulesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutRatePlanSchedulesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# RatePlanSchedulesToCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**RatePlanCode** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**RatePlanScheduleList** | Pointer to [**[]RatePlanScheduleDetailType**](RatePlanScheduleDetailType.md) | List of rate plan schedules to be created. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewRatePlanSchedulesToCreate

`func NewRatePlanSchedulesToCreate() *RatePlanSchedulesToCreate`

NewRatePlanSchedulesToCreate instantiates a new RatePlanSchedulesToCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatePlanSchedulesToCreateWithDefaults

`func NewRatePlanSchedulesToCreateWithDefaults() *RatePlanSchedulesToCreate`

NewRatePlanSchedulesToCreateWithDefaults instantiates a new RatePlanSchedulesToCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *RatePlanSchedulesToCreate) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RatePlanSchedulesToCreate) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RatePlanSchedulesToCreate) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RatePlanSchedulesToCreate) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *RatePlanSchedulesToCreate) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RatePlanSchedulesToCreate) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RatePlanSchedulesToCreate) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RatePlanSchedulesToCreate) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *RatePlanSchedulesToCreate) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *RatePlanSchedulesToCreate) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *RatePlanSchedulesToCreate) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *RatePlanSchedulesToCreate) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetRatePlanScheduleList

`func (o *RatePlanSchedulesToCreate) GetRatePlanScheduleList() []RatePlanScheduleDetailType`

GetRatePlanScheduleList returns the RatePlanScheduleList field if non-nil, zero value otherwise.

### GetRatePlanScheduleListOk

`func (o *RatePlanSchedulesToCreate) GetRatePlanScheduleListOk() (*[]RatePlanScheduleDetailType, bool)`

GetRatePlanScheduleListOk returns a tuple with the RatePlanScheduleList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanScheduleList

`func (o *RatePlanSchedulesToCreate) SetRatePlanScheduleList(v []RatePlanScheduleDetailType)`

SetRatePlanScheduleList sets RatePlanScheduleList field to given value.

### HasRatePlanScheduleList

`func (o *RatePlanSchedulesToCreate) HasRatePlanScheduleList() bool`

HasRatePlanScheduleList returns a boolean if a field has been set.

### GetWarnings

`func (o *RatePlanSchedulesToCreate) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RatePlanSchedulesToCreate) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RatePlanSchedulesToCreate) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RatePlanSchedulesToCreate) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# CateringMenuType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClassId** | Pointer to **string** | This type holds class id for given menu. | [optional] 
**HotelId** | Pointer to **string** | The Hotel code which the catering menu belongs to. | [optional] 
**Id** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Info** | Pointer to [**CateringMenuInfoType**](CateringMenuInfoType.md) |  | [optional] 
**MenuDetailList** | Pointer to [**CateringMenuDetailListType**](CateringMenuDetailListType.md) |  | [optional] 
**MenuNoteList** | Pointer to [**EventResourceNotesType**](EventResourceNotesType.md) |  | [optional] 
**MultiChoiceList** | Pointer to [**CateringMultiChoiceMenuListType**](CateringMultiChoiceMenuListType.md) |  | [optional] 
**RevenueList** | Pointer to [**CateringMenuRevListType**](CateringMenuRevListType.md) |  | [optional] 

## Methods

### NewCateringMenuType

`func NewCateringMenuType() *CateringMenuType`

NewCateringMenuType instantiates a new CateringMenuType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringMenuTypeWithDefaults

`func NewCateringMenuTypeWithDefaults() *CateringMenuType`

NewCateringMenuTypeWithDefaults instantiates a new CateringMenuType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetClassId

`func (o *CateringMenuType) GetClassId() string`

GetClassId returns the ClassId field if non-nil, zero value otherwise.

### GetClassIdOk

`func (o *CateringMenuType) GetClassIdOk() (*string, bool)`

GetClassIdOk returns a tuple with the ClassId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClassId

`func (o *CateringMenuType) SetClassId(v string)`

SetClassId sets ClassId field to given value.

### HasClassId

`func (o *CateringMenuType) HasClassId() bool`

HasClassId returns a boolean if a field has been set.

### GetHotelId

`func (o *CateringMenuType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CateringMenuType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CateringMenuType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CateringMenuType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetId

`func (o *CateringMenuType) GetId() UniqueIDType`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CateringMenuType) GetIdOk() (*UniqueIDType, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CateringMenuType) SetId(v UniqueIDType)`

SetId sets Id field to given value.

### HasId

`func (o *CateringMenuType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetInfo

`func (o *CateringMenuType) GetInfo() CateringMenuInfoType`

GetInfo returns the Info field if non-nil, zero value otherwise.

### GetInfoOk

`func (o *CateringMenuType) GetInfoOk() (*CateringMenuInfoType, bool)`

GetInfoOk returns a tuple with the Info field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInfo

`func (o *CateringMenuType) SetInfo(v CateringMenuInfoType)`

SetInfo sets Info field to given value.

### HasInfo

`func (o *CateringMenuType) HasInfo() bool`

HasInfo returns a boolean if a field has been set.

### GetMenuDetailList

`func (o *CateringMenuType) GetMenuDetailList() CateringMenuDetailListType`

GetMenuDetailList returns the MenuDetailList field if non-nil, zero value otherwise.

### GetMenuDetailListOk

`func (o *CateringMenuType) GetMenuDetailListOk() (*CateringMenuDetailListType, bool)`

GetMenuDetailListOk returns a tuple with the MenuDetailList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMenuDetailList

`func (o *CateringMenuType) SetMenuDetailList(v CateringMenuDetailListType)`

SetMenuDetailList sets MenuDetailList field to given value.

### HasMenuDetailList

`func (o *CateringMenuType) HasMenuDetailList() bool`

HasMenuDetailList returns a boolean if a field has been set.

### GetMenuNoteList

`func (o *CateringMenuType) GetMenuNoteList() EventResourceNotesType`

GetMenuNoteList returns the MenuNoteList field if non-nil, zero value otherwise.

### GetMenuNoteListOk

`func (o *CateringMenuType) GetMenuNoteListOk() (*EventResourceNotesType, bool)`

GetMenuNoteListOk returns a tuple with the MenuNoteList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMenuNoteList

`func (o *CateringMenuType) SetMenuNoteList(v EventResourceNotesType)`

SetMenuNoteList sets MenuNoteList field to given value.

### HasMenuNoteList

`func (o *CateringMenuType) HasMenuNoteList() bool`

HasMenuNoteList returns a boolean if a field has been set.

### GetMultiChoiceList

`func (o *CateringMenuType) GetMultiChoiceList() CateringMultiChoiceMenuListType`

GetMultiChoiceList returns the MultiChoiceList field if non-nil, zero value otherwise.

### GetMultiChoiceListOk

`func (o *CateringMenuType) GetMultiChoiceListOk() (*CateringMultiChoiceMenuListType, bool)`

GetMultiChoiceListOk returns a tuple with the MultiChoiceList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMultiChoiceList

`func (o *CateringMenuType) SetMultiChoiceList(v CateringMultiChoiceMenuListType)`

SetMultiChoiceList sets MultiChoiceList field to given value.

### HasMultiChoiceList

`func (o *CateringMenuType) HasMultiChoiceList() bool`

HasMultiChoiceList returns a boolean if a field has been set.

### GetRevenueList

`func (o *CateringMenuType) GetRevenueList() CateringMenuRevListType`

GetRevenueList returns the RevenueList field if non-nil, zero value otherwise.

### GetRevenueListOk

`func (o *CateringMenuType) GetRevenueListOk() (*CateringMenuRevListType, bool)`

GetRevenueListOk returns a tuple with the RevenueList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueList

`func (o *CateringMenuType) SetRevenueList(v CateringMenuRevListType)`

SetRevenueList sets RevenueList field to given value.

### HasRevenueList

`func (o *CateringMenuType) HasRevenueList() bool`

HasRevenueList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



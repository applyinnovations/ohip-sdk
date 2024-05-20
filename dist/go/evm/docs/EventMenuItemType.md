# EventMenuItemType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attendees** | Pointer to [**CateringEventsAttendeesType**](CateringEventsAttendeesType.md) |  | [optional] 
**ClassInfo** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**Container** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**Cost** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Course** | Pointer to **float32** | Determines the order of menu course. | [optional] 
**CourseOrder** | Pointer to **float32** | Determines the order of menu item within the course. | [optional] 
**Custom** | Pointer to **bool** | Indicates whether this menu item is custom | [optional] 
**DemandFactor** | Pointer to **float32** | Demand Factor of the Menu item. | [optional] 
**Description** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**DietaryPreferenceList** | Pointer to [**[]DietaryPrefType**](DietaryPrefType.md) |  | [optional] 
**DiscountPercentage** | Pointer to **float32** | Discount Percentage applied to Rent Amount. | [optional] 
**DisplayOrder** | Pointer to **int32** | Defines the Display Order of the menu item class, to which the menu item is attached | [optional] 
**EventMenuDetailID** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**EventTypes** | Pointer to **[]string** |  | [optional] 
**HotelId** | Pointer to **string** | The Hotel code which the menu item class belongs to | [optional] 
**Id** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Inactive** | Pointer to **bool** | Check for the status of menu item | [optional] 
**IncludedYN** | Pointer to **bool** | Included flag | [optional] 
**ItemConsumption** | Pointer to **bool** | Selection of this notes that the price defined is charged &#39;as-consumed&#39; basis | [optional] 
**MandatoryYN** | Pointer to **bool** | Determines if the Menu Item is mandatory or not | [optional] 
**MenuType** | Pointer to [**MenuTypeType**](MenuTypeType.md) |  | [optional] 
**Name1** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**Name2** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**Name3** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**Origin1** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**Origin2** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**Portion** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**Print** | Pointer to **bool** | check if Print action is required for menu item | [optional] 
**QuickInsertCode** | Pointer to **string** | Article number in Caps of menu item | [optional] 
**ResponsibleDepartments** | Pointer to **[]string** |  | [optional] 
**Restriction** | Pointer to **string** | Any particular restriction description in 100 charactera | [optional] 
**RevenueType** | Pointer to **string** | RevenueType of Menu Item | [optional] 
**SalesPrice** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Servings** | Pointer to **int32** | Numeric value of servings of Menu item | [optional] 
**WebBookable** | Pointer to **bool** | Check of Menu Item if it is web bookable | [optional] 
**Year** | Pointer to **int32** | This value is typically the year of the Wine | [optional] 

## Methods

### NewEventMenuItemType

`func NewEventMenuItemType() *EventMenuItemType`

NewEventMenuItemType instantiates a new EventMenuItemType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventMenuItemTypeWithDefaults

`func NewEventMenuItemTypeWithDefaults() *EventMenuItemType`

NewEventMenuItemTypeWithDefaults instantiates a new EventMenuItemType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttendees

`func (o *EventMenuItemType) GetAttendees() CateringEventsAttendeesType`

GetAttendees returns the Attendees field if non-nil, zero value otherwise.

### GetAttendeesOk

`func (o *EventMenuItemType) GetAttendeesOk() (*CateringEventsAttendeesType, bool)`

GetAttendeesOk returns a tuple with the Attendees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttendees

`func (o *EventMenuItemType) SetAttendees(v CateringEventsAttendeesType)`

SetAttendees sets Attendees field to given value.

### HasAttendees

`func (o *EventMenuItemType) HasAttendees() bool`

HasAttendees returns a boolean if a field has been set.

### GetClassInfo

`func (o *EventMenuItemType) GetClassInfo() CodeDescriptionType`

GetClassInfo returns the ClassInfo field if non-nil, zero value otherwise.

### GetClassInfoOk

`func (o *EventMenuItemType) GetClassInfoOk() (*CodeDescriptionType, bool)`

GetClassInfoOk returns a tuple with the ClassInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClassInfo

`func (o *EventMenuItemType) SetClassInfo(v CodeDescriptionType)`

SetClassInfo sets ClassInfo field to given value.

### HasClassInfo

`func (o *EventMenuItemType) HasClassInfo() bool`

HasClassInfo returns a boolean if a field has been set.

### GetContainer

`func (o *EventMenuItemType) GetContainer() CodeDescriptionType`

GetContainer returns the Container field if non-nil, zero value otherwise.

### GetContainerOk

`func (o *EventMenuItemType) GetContainerOk() (*CodeDescriptionType, bool)`

GetContainerOk returns a tuple with the Container field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContainer

`func (o *EventMenuItemType) SetContainer(v CodeDescriptionType)`

SetContainer sets Container field to given value.

### HasContainer

`func (o *EventMenuItemType) HasContainer() bool`

HasContainer returns a boolean if a field has been set.

### GetCost

`func (o *EventMenuItemType) GetCost() CurrencyAmountType`

GetCost returns the Cost field if non-nil, zero value otherwise.

### GetCostOk

`func (o *EventMenuItemType) GetCostOk() (*CurrencyAmountType, bool)`

GetCostOk returns a tuple with the Cost field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCost

`func (o *EventMenuItemType) SetCost(v CurrencyAmountType)`

SetCost sets Cost field to given value.

### HasCost

`func (o *EventMenuItemType) HasCost() bool`

HasCost returns a boolean if a field has been set.

### GetCourse

`func (o *EventMenuItemType) GetCourse() float32`

GetCourse returns the Course field if non-nil, zero value otherwise.

### GetCourseOk

`func (o *EventMenuItemType) GetCourseOk() (*float32, bool)`

GetCourseOk returns a tuple with the Course field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCourse

`func (o *EventMenuItemType) SetCourse(v float32)`

SetCourse sets Course field to given value.

### HasCourse

`func (o *EventMenuItemType) HasCourse() bool`

HasCourse returns a boolean if a field has been set.

### GetCourseOrder

`func (o *EventMenuItemType) GetCourseOrder() float32`

GetCourseOrder returns the CourseOrder field if non-nil, zero value otherwise.

### GetCourseOrderOk

`func (o *EventMenuItemType) GetCourseOrderOk() (*float32, bool)`

GetCourseOrderOk returns a tuple with the CourseOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCourseOrder

`func (o *EventMenuItemType) SetCourseOrder(v float32)`

SetCourseOrder sets CourseOrder field to given value.

### HasCourseOrder

`func (o *EventMenuItemType) HasCourseOrder() bool`

HasCourseOrder returns a boolean if a field has been set.

### GetCustom

`func (o *EventMenuItemType) GetCustom() bool`

GetCustom returns the Custom field if non-nil, zero value otherwise.

### GetCustomOk

`func (o *EventMenuItemType) GetCustomOk() (*bool, bool)`

GetCustomOk returns a tuple with the Custom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustom

`func (o *EventMenuItemType) SetCustom(v bool)`

SetCustom sets Custom field to given value.

### HasCustom

`func (o *EventMenuItemType) HasCustom() bool`

HasCustom returns a boolean if a field has been set.

### GetDemandFactor

`func (o *EventMenuItemType) GetDemandFactor() float32`

GetDemandFactor returns the DemandFactor field if non-nil, zero value otherwise.

### GetDemandFactorOk

`func (o *EventMenuItemType) GetDemandFactorOk() (*float32, bool)`

GetDemandFactorOk returns a tuple with the DemandFactor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDemandFactor

`func (o *EventMenuItemType) SetDemandFactor(v float32)`

SetDemandFactor sets DemandFactor field to given value.

### HasDemandFactor

`func (o *EventMenuItemType) HasDemandFactor() bool`

HasDemandFactor returns a boolean if a field has been set.

### GetDescription

`func (o *EventMenuItemType) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *EventMenuItemType) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *EventMenuItemType) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *EventMenuItemType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDietaryPreferenceList

`func (o *EventMenuItemType) GetDietaryPreferenceList() []DietaryPrefType`

GetDietaryPreferenceList returns the DietaryPreferenceList field if non-nil, zero value otherwise.

### GetDietaryPreferenceListOk

`func (o *EventMenuItemType) GetDietaryPreferenceListOk() (*[]DietaryPrefType, bool)`

GetDietaryPreferenceListOk returns a tuple with the DietaryPreferenceList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDietaryPreferenceList

`func (o *EventMenuItemType) SetDietaryPreferenceList(v []DietaryPrefType)`

SetDietaryPreferenceList sets DietaryPreferenceList field to given value.

### HasDietaryPreferenceList

`func (o *EventMenuItemType) HasDietaryPreferenceList() bool`

HasDietaryPreferenceList returns a boolean if a field has been set.

### GetDiscountPercentage

`func (o *EventMenuItemType) GetDiscountPercentage() float32`

GetDiscountPercentage returns the DiscountPercentage field if non-nil, zero value otherwise.

### GetDiscountPercentageOk

`func (o *EventMenuItemType) GetDiscountPercentageOk() (*float32, bool)`

GetDiscountPercentageOk returns a tuple with the DiscountPercentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscountPercentage

`func (o *EventMenuItemType) SetDiscountPercentage(v float32)`

SetDiscountPercentage sets DiscountPercentage field to given value.

### HasDiscountPercentage

`func (o *EventMenuItemType) HasDiscountPercentage() bool`

HasDiscountPercentage returns a boolean if a field has been set.

### GetDisplayOrder

`func (o *EventMenuItemType) GetDisplayOrder() int32`

GetDisplayOrder returns the DisplayOrder field if non-nil, zero value otherwise.

### GetDisplayOrderOk

`func (o *EventMenuItemType) GetDisplayOrderOk() (*int32, bool)`

GetDisplayOrderOk returns a tuple with the DisplayOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayOrder

`func (o *EventMenuItemType) SetDisplayOrder(v int32)`

SetDisplayOrder sets DisplayOrder field to given value.

### HasDisplayOrder

`func (o *EventMenuItemType) HasDisplayOrder() bool`

HasDisplayOrder returns a boolean if a field has been set.

### GetEventMenuDetailID

`func (o *EventMenuItemType) GetEventMenuDetailID() UniqueIDType`

GetEventMenuDetailID returns the EventMenuDetailID field if non-nil, zero value otherwise.

### GetEventMenuDetailIDOk

`func (o *EventMenuItemType) GetEventMenuDetailIDOk() (*UniqueIDType, bool)`

GetEventMenuDetailIDOk returns a tuple with the EventMenuDetailID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventMenuDetailID

`func (o *EventMenuItemType) SetEventMenuDetailID(v UniqueIDType)`

SetEventMenuDetailID sets EventMenuDetailID field to given value.

### HasEventMenuDetailID

`func (o *EventMenuItemType) HasEventMenuDetailID() bool`

HasEventMenuDetailID returns a boolean if a field has been set.

### GetEventTypes

`func (o *EventMenuItemType) GetEventTypes() []string`

GetEventTypes returns the EventTypes field if non-nil, zero value otherwise.

### GetEventTypesOk

`func (o *EventMenuItemType) GetEventTypesOk() (*[]string, bool)`

GetEventTypesOk returns a tuple with the EventTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventTypes

`func (o *EventMenuItemType) SetEventTypes(v []string)`

SetEventTypes sets EventTypes field to given value.

### HasEventTypes

`func (o *EventMenuItemType) HasEventTypes() bool`

HasEventTypes returns a boolean if a field has been set.

### GetHotelId

`func (o *EventMenuItemType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *EventMenuItemType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *EventMenuItemType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *EventMenuItemType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetId

`func (o *EventMenuItemType) GetId() UniqueIDType`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *EventMenuItemType) GetIdOk() (*UniqueIDType, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *EventMenuItemType) SetId(v UniqueIDType)`

SetId sets Id field to given value.

### HasId

`func (o *EventMenuItemType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetInactive

`func (o *EventMenuItemType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *EventMenuItemType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *EventMenuItemType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *EventMenuItemType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetIncludedYN

`func (o *EventMenuItemType) GetIncludedYN() bool`

GetIncludedYN returns the IncludedYN field if non-nil, zero value otherwise.

### GetIncludedYNOk

`func (o *EventMenuItemType) GetIncludedYNOk() (*bool, bool)`

GetIncludedYNOk returns a tuple with the IncludedYN field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludedYN

`func (o *EventMenuItemType) SetIncludedYN(v bool)`

SetIncludedYN sets IncludedYN field to given value.

### HasIncludedYN

`func (o *EventMenuItemType) HasIncludedYN() bool`

HasIncludedYN returns a boolean if a field has been set.

### GetItemConsumption

`func (o *EventMenuItemType) GetItemConsumption() bool`

GetItemConsumption returns the ItemConsumption field if non-nil, zero value otherwise.

### GetItemConsumptionOk

`func (o *EventMenuItemType) GetItemConsumptionOk() (*bool, bool)`

GetItemConsumptionOk returns a tuple with the ItemConsumption field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemConsumption

`func (o *EventMenuItemType) SetItemConsumption(v bool)`

SetItemConsumption sets ItemConsumption field to given value.

### HasItemConsumption

`func (o *EventMenuItemType) HasItemConsumption() bool`

HasItemConsumption returns a boolean if a field has been set.

### GetMandatoryYN

`func (o *EventMenuItemType) GetMandatoryYN() bool`

GetMandatoryYN returns the MandatoryYN field if non-nil, zero value otherwise.

### GetMandatoryYNOk

`func (o *EventMenuItemType) GetMandatoryYNOk() (*bool, bool)`

GetMandatoryYNOk returns a tuple with the MandatoryYN field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMandatoryYN

`func (o *EventMenuItemType) SetMandatoryYN(v bool)`

SetMandatoryYN sets MandatoryYN field to given value.

### HasMandatoryYN

`func (o *EventMenuItemType) HasMandatoryYN() bool`

HasMandatoryYN returns a boolean if a field has been set.

### GetMenuType

`func (o *EventMenuItemType) GetMenuType() MenuTypeType`

GetMenuType returns the MenuType field if non-nil, zero value otherwise.

### GetMenuTypeOk

`func (o *EventMenuItemType) GetMenuTypeOk() (*MenuTypeType, bool)`

GetMenuTypeOk returns a tuple with the MenuType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMenuType

`func (o *EventMenuItemType) SetMenuType(v MenuTypeType)`

SetMenuType sets MenuType field to given value.

### HasMenuType

`func (o *EventMenuItemType) HasMenuType() bool`

HasMenuType returns a boolean if a field has been set.

### GetName1

`func (o *EventMenuItemType) GetName1() TranslationTextType2000`

GetName1 returns the Name1 field if non-nil, zero value otherwise.

### GetName1Ok

`func (o *EventMenuItemType) GetName1Ok() (*TranslationTextType2000, bool)`

GetName1Ok returns a tuple with the Name1 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName1

`func (o *EventMenuItemType) SetName1(v TranslationTextType2000)`

SetName1 sets Name1 field to given value.

### HasName1

`func (o *EventMenuItemType) HasName1() bool`

HasName1 returns a boolean if a field has been set.

### GetName2

`func (o *EventMenuItemType) GetName2() TranslationTextType2000`

GetName2 returns the Name2 field if non-nil, zero value otherwise.

### GetName2Ok

`func (o *EventMenuItemType) GetName2Ok() (*TranslationTextType2000, bool)`

GetName2Ok returns a tuple with the Name2 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName2

`func (o *EventMenuItemType) SetName2(v TranslationTextType2000)`

SetName2 sets Name2 field to given value.

### HasName2

`func (o *EventMenuItemType) HasName2() bool`

HasName2 returns a boolean if a field has been set.

### GetName3

`func (o *EventMenuItemType) GetName3() TranslationTextType2000`

GetName3 returns the Name3 field if non-nil, zero value otherwise.

### GetName3Ok

`func (o *EventMenuItemType) GetName3Ok() (*TranslationTextType2000, bool)`

GetName3Ok returns a tuple with the Name3 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName3

`func (o *EventMenuItemType) SetName3(v TranslationTextType2000)`

SetName3 sets Name3 field to given value.

### HasName3

`func (o *EventMenuItemType) HasName3() bool`

HasName3 returns a boolean if a field has been set.

### GetOrigin1

`func (o *EventMenuItemType) GetOrigin1() TranslationTextType2000`

GetOrigin1 returns the Origin1 field if non-nil, zero value otherwise.

### GetOrigin1Ok

`func (o *EventMenuItemType) GetOrigin1Ok() (*TranslationTextType2000, bool)`

GetOrigin1Ok returns a tuple with the Origin1 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrigin1

`func (o *EventMenuItemType) SetOrigin1(v TranslationTextType2000)`

SetOrigin1 sets Origin1 field to given value.

### HasOrigin1

`func (o *EventMenuItemType) HasOrigin1() bool`

HasOrigin1 returns a boolean if a field has been set.

### GetOrigin2

`func (o *EventMenuItemType) GetOrigin2() TranslationTextType2000`

GetOrigin2 returns the Origin2 field if non-nil, zero value otherwise.

### GetOrigin2Ok

`func (o *EventMenuItemType) GetOrigin2Ok() (*TranslationTextType2000, bool)`

GetOrigin2Ok returns a tuple with the Origin2 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrigin2

`func (o *EventMenuItemType) SetOrigin2(v TranslationTextType2000)`

SetOrigin2 sets Origin2 field to given value.

### HasOrigin2

`func (o *EventMenuItemType) HasOrigin2() bool`

HasOrigin2 returns a boolean if a field has been set.

### GetPortion

`func (o *EventMenuItemType) GetPortion() TranslationTextType2000`

GetPortion returns the Portion field if non-nil, zero value otherwise.

### GetPortionOk

`func (o *EventMenuItemType) GetPortionOk() (*TranslationTextType2000, bool)`

GetPortionOk returns a tuple with the Portion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPortion

`func (o *EventMenuItemType) SetPortion(v TranslationTextType2000)`

SetPortion sets Portion field to given value.

### HasPortion

`func (o *EventMenuItemType) HasPortion() bool`

HasPortion returns a boolean if a field has been set.

### GetPrint

`func (o *EventMenuItemType) GetPrint() bool`

GetPrint returns the Print field if non-nil, zero value otherwise.

### GetPrintOk

`func (o *EventMenuItemType) GetPrintOk() (*bool, bool)`

GetPrintOk returns a tuple with the Print field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrint

`func (o *EventMenuItemType) SetPrint(v bool)`

SetPrint sets Print field to given value.

### HasPrint

`func (o *EventMenuItemType) HasPrint() bool`

HasPrint returns a boolean if a field has been set.

### GetQuickInsertCode

`func (o *EventMenuItemType) GetQuickInsertCode() string`

GetQuickInsertCode returns the QuickInsertCode field if non-nil, zero value otherwise.

### GetQuickInsertCodeOk

`func (o *EventMenuItemType) GetQuickInsertCodeOk() (*string, bool)`

GetQuickInsertCodeOk returns a tuple with the QuickInsertCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuickInsertCode

`func (o *EventMenuItemType) SetQuickInsertCode(v string)`

SetQuickInsertCode sets QuickInsertCode field to given value.

### HasQuickInsertCode

`func (o *EventMenuItemType) HasQuickInsertCode() bool`

HasQuickInsertCode returns a boolean if a field has been set.

### GetResponsibleDepartments

`func (o *EventMenuItemType) GetResponsibleDepartments() []string`

GetResponsibleDepartments returns the ResponsibleDepartments field if non-nil, zero value otherwise.

### GetResponsibleDepartmentsOk

`func (o *EventMenuItemType) GetResponsibleDepartmentsOk() (*[]string, bool)`

GetResponsibleDepartmentsOk returns a tuple with the ResponsibleDepartments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponsibleDepartments

`func (o *EventMenuItemType) SetResponsibleDepartments(v []string)`

SetResponsibleDepartments sets ResponsibleDepartments field to given value.

### HasResponsibleDepartments

`func (o *EventMenuItemType) HasResponsibleDepartments() bool`

HasResponsibleDepartments returns a boolean if a field has been set.

### GetRestriction

`func (o *EventMenuItemType) GetRestriction() string`

GetRestriction returns the Restriction field if non-nil, zero value otherwise.

### GetRestrictionOk

`func (o *EventMenuItemType) GetRestrictionOk() (*string, bool)`

GetRestrictionOk returns a tuple with the Restriction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestriction

`func (o *EventMenuItemType) SetRestriction(v string)`

SetRestriction sets Restriction field to given value.

### HasRestriction

`func (o *EventMenuItemType) HasRestriction() bool`

HasRestriction returns a boolean if a field has been set.

### GetRevenueType

`func (o *EventMenuItemType) GetRevenueType() string`

GetRevenueType returns the RevenueType field if non-nil, zero value otherwise.

### GetRevenueTypeOk

`func (o *EventMenuItemType) GetRevenueTypeOk() (*string, bool)`

GetRevenueTypeOk returns a tuple with the RevenueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueType

`func (o *EventMenuItemType) SetRevenueType(v string)`

SetRevenueType sets RevenueType field to given value.

### HasRevenueType

`func (o *EventMenuItemType) HasRevenueType() bool`

HasRevenueType returns a boolean if a field has been set.

### GetSalesPrice

`func (o *EventMenuItemType) GetSalesPrice() CurrencyAmountType`

GetSalesPrice returns the SalesPrice field if non-nil, zero value otherwise.

### GetSalesPriceOk

`func (o *EventMenuItemType) GetSalesPriceOk() (*CurrencyAmountType, bool)`

GetSalesPriceOk returns a tuple with the SalesPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesPrice

`func (o *EventMenuItemType) SetSalesPrice(v CurrencyAmountType)`

SetSalesPrice sets SalesPrice field to given value.

### HasSalesPrice

`func (o *EventMenuItemType) HasSalesPrice() bool`

HasSalesPrice returns a boolean if a field has been set.

### GetServings

`func (o *EventMenuItemType) GetServings() int32`

GetServings returns the Servings field if non-nil, zero value otherwise.

### GetServingsOk

`func (o *EventMenuItemType) GetServingsOk() (*int32, bool)`

GetServingsOk returns a tuple with the Servings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServings

`func (o *EventMenuItemType) SetServings(v int32)`

SetServings sets Servings field to given value.

### HasServings

`func (o *EventMenuItemType) HasServings() bool`

HasServings returns a boolean if a field has been set.

### GetWebBookable

`func (o *EventMenuItemType) GetWebBookable() bool`

GetWebBookable returns the WebBookable field if non-nil, zero value otherwise.

### GetWebBookableOk

`func (o *EventMenuItemType) GetWebBookableOk() (*bool, bool)`

GetWebBookableOk returns a tuple with the WebBookable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebBookable

`func (o *EventMenuItemType) SetWebBookable(v bool)`

SetWebBookable sets WebBookable field to given value.

### HasWebBookable

`func (o *EventMenuItemType) HasWebBookable() bool`

HasWebBookable returns a boolean if a field has been set.

### GetYear

`func (o *EventMenuItemType) GetYear() int32`

GetYear returns the Year field if non-nil, zero value otherwise.

### GetYearOk

`func (o *EventMenuItemType) GetYearOk() (*int32, bool)`

GetYearOk returns a tuple with the Year field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYear

`func (o *EventMenuItemType) SetYear(v int32)`

SetYear sets Year field to given value.

### HasYear

`func (o *EventMenuItemType) HasYear() bool`

HasYear returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


